import { groq, MODEL, SYSTEM_PROMPT } from "../server/config/ai.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  const { messages } = req.body ?? {};

  if (!Array.isArray(messages)) {
    return res.status(400).json({
      error: "messages must be an array",
    });
  }

  const safeMessages = messages
    .filter(
      (message) =>
        message &&
        (message.role === "user" || message.role === "assistant") &&
        typeof message.content === "string"
    )
    .map((message) => ({
      role: message.role,
      content: message.content,
    }));

  if (safeMessages.length === 0) {
    return res.status(400).json({
      error: "At least one valid message is required",
    });
  }

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "no-cache, no-transform");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("X-Accel-Buffering", "no");
  res.flushHeaders();

  try {
    const stream = await groq.chat.completions.create({
      model: MODEL,
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        ...safeMessages,
      ],
      max_completion_tokens: 1024,
      temperature: 0.4,
      stream: true,
    });

    for await (const chunk of stream) {
      if (res.writableEnded) {
        break;
      }

      const text = chunk.choices?.[0]?.delta?.content;

      if (text) {
        res.write(text);
      }
    }

    if (!res.writableEnded) {
      res.end();
    }
  } catch (error) {
    console.error("Groq stream error:", error);

    if (!res.headersSent) {
      return res.status(500).json({
        error: "AI request failed",
      });
    }

    if (!res.writableEnded) {
      res.end();
    }
  }
}