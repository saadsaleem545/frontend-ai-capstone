import "dotenv/config";
import express from "express";
import cors from "cors";
import { groq, MODEL, SYSTEM_PROMPT } from "./config/ai.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Keep the assistant instructions in one place.
// The API key remains server-side and is never sent to the browser.


app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    mode: "groq-streaming",
  });
});

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

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

  let stream;

  try {
    stream = await groq.chat.completions.create({
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
    if (error?.name === "AbortError") {
      console.log("Groq stream aborted by client.");
      return;
    }

    console.error("Groq stream error:", error);

    if (!res.headersSent) {
      res.status(500).json({
        error: "AI request failed",
      });
    } else if (!res.writableEnded) {
      res.end();
    }
  }

  req.on("close", () => {
    if (!res.writableEnded) {
      console.log("Client disconnected from Groq stream.");
    }
  });
});

app.listen(PORT, () => {
  console.log(`AI server running on http://localhost:${PORT}`);
  console.log("Mode: GROQ STREAMING");
});