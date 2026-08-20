import { useEffect, useRef, useState } from "react";
import { ArrowDown, Send, Square } from "lucide-react";

function AIChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [showJumpButton, setShowJumpButton] = useState(false);

  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const abortControllerRef = useRef(null);

  const scrollToBottom = (smooth = true) => {
    messagesEndRef.current?.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
    });
  };

  const isAtBottom = () => {
    const container = messagesContainerRef.current;

    if (!container) return true;

    const distanceFromBottom =
      container.scrollHeight -
      container.scrollTop -
      container.clientHeight;

    return distanceFromBottom < 80;
  };

  useEffect(() => {
    const container = messagesContainerRef.current;

    if (!container) return;

    const handleScroll = () => {
      setShowJumpButton(!isAtBottom());
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isAtBottom()) {
      scrollToBottom();
    }
  }, [messages]);

  const sendMessage = async () => {
    const trimmedInput = input.trim();

    if (!trimmedInput || isStreaming) return;

    const userMessage = {
      role: "user",
      content: trimmedInput,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages([
      ...updatedMessages,
      {
        role: "assistant",
        content: "",
      },
    ]);

    setInput("");
    setIsStreaming(true);

    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      const API_BASE_URL = import.meta.env.VITE_API_URL || "";
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error("Unable to connect to AI server.");
      }

      if (!response.body) {
        throw new Error("Streaming is not supported by this response.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let assistantText = "";

      while (true) {
        const { value, done } = await reader.read();

        if (done) break;

        const chunk = decoder.decode(value, { stream: true });

        assistantText += chunk;

        setMessages((currentMessages) => {
          const updated = [...currentMessages];

          updated[updated.length - 1] = {
            role: "assistant",
            content: assistantText,
          };

          return updated;
        });
      }

      const finalChunk = decoder.decode();

      if (finalChunk) {
        assistantText += finalChunk;

        setMessages((currentMessages) => {
          const updated = [...currentMessages];

          updated[updated.length - 1] = {
            role: "assistant",
            content: assistantText,
          };

          return updated;
        });
      }
    } catch (error) {
      if (error.name === "AbortError") {
        return;
      }

      setMessages((currentMessages) => {
        const updated = [...currentMessages];

        updated[updated.length - 1] = {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        };

        return updated;
      });

      console.error(error);
    } finally {
      setIsStreaming(false);
      abortControllerRef.current = null;
    }
  };

  const stopStreaming = () => {
    abortControllerRef.current?.abort();
    setIsStreaming(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <section className="ai-chat">
      <div className="ai-chat-header">
        <div>
          <p className="ai-chat-eyebrow">AI ASSISTANT</p>
          <h2>Portfolio Assistant</h2>
        </div>

        <span className={isStreaming ? "ai-status streaming" : "ai-status"}>
          <span className="ai-status-dot" />
          {isStreaming ? "Thinking" : "Online"}
        </span>
      </div>

      <div className="ai-chat-body" ref={messagesContainerRef}>
        {messages.length === 0 && (
          <div className="ai-chat-empty">
            <h3>Ask about this portfolio</h3>
            <p>
              Try asking about the projects, technical decisions, or
              frontend skills demonstrated here.
            </p>
          </div>
        )}

        {messages.map((message, index) => {
          const isAssistant = message.role === "assistant";

          return (
            <div
              className={`chat-message ${
                isAssistant ? "assistant" : "user"
              }`}
              key={`${message.role}-${index}`}
            >
              <div className="chat-message-label">
                {isAssistant ? "AI Assistant" : "You"}
              </div>

              {isAssistant && isStreaming && message.content === "" ? (
                <div className="thinking-indicator" aria-label="AI is thinking">
                  <span />
                  <span />
                  <span />
                </div>
              ) : (
                <div className="chat-message-content">
                  {message.content}
                </div>
              )}
            </div>
          );
        })}

        <div ref={messagesEndRef} />
      </div>

      {showJumpButton && (
        <button
          type="button"
          className="jump-to-latest"
          onClick={() => scrollToBottom()}
        >
          <ArrowDown size={16} />
          Jump to latest
        </button>
      )}

      <form className="ai-chat-input-area" onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask something about the portfolio..."
          rows={1}
          disabled={isStreaming}
          aria-label="Chat message"
        />

        {isStreaming ? (
          <button
            type="button"
            className="chat-stop-button"
            onClick={stopStreaming}
            aria-label="Stop generating"
          >
            <Square size={16} fill="currentColor" />
            Stop
          </button>
        ) : (
          <button
            type="submit"
            className="chat-send-button"
            disabled={!input.trim()}
            aria-label="Send message"
          >
            <Send size={16} />
            Send
          </button>
        )}
      </form>
    </section>
  );
}

export default AIChat;