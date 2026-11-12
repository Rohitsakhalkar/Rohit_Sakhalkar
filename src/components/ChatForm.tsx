"use client";

import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

// ─── EmailJS config ────────────────────────────────────────────────────────────
// 1. Go to https://www.emailjs.com and create a free account
// 2. Create a service (Gmail) and get your SERVICE_ID
// 3. Create an email template and get your TEMPLATE_ID
// 4. Copy your PUBLIC_KEY from Account → API Keys
// Then put them in .env.local:
//   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
//   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
//   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

interface Step {
  botMsg: string;
  field: "name" | "subject" | "message" | "email";
  placeholder: string;
}

const steps: Step[] = [
  {
    botMsg: "Hey. What's your name?",
    field: "name",
    placeholder: "Alex",
  },
  {
    botMsg: "What do you want to talk about?",
    field: "subject",
    placeholder: "Collab / job / just saying hi",
  },
  {
    botMsg: "Go ahead — say what you came to say.",
    field: "message",
    placeholder: "I saw your work and...",
  },
  {
    botMsg: "Last thing: your email so Rohit can get back to you.",
    field: "email",
    placeholder: "you@example.com",
  },
];

type FormData = { name: string; subject: string; message: string; email: string };

interface ChatBubble {
  who: "bot" | "user";
  text: string;
}

export default function ChatForm() {
  const [stepIdx, setStepIdx] = useState(0);
  const [data, setData] = useState<FormData>({ name: "", subject: "", message: "", email: "" });
  const [input, setInput] = useState("");
  const [chat, setChat] = useState<ChatBubble[]>([]);
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Kick off with first bot message
  useEffect(() => {
    setChat([{ who: "bot", text: steps[0].botMsg }]);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => (inputRef.current as HTMLElement)?.focus(), 100);
  }, [chat]);

  const handleSend = async () => {
    const val = input.trim();
    if (!val) return;

    const step = steps[stepIdx];
    const newData = { ...data, [step.field]: val };
    setData(newData);
    setChat((prev) => [...prev, { who: "user", text: val }]);
    setInput("");

    const next = stepIdx + 1;

    if (next < steps.length) {
      setTimeout(() => {
        setChat((prev) => [...prev, { who: "bot", text: steps[next].botMsg }]);
        setStepIdx(next);
      }, 400);
    } else {
      // All fields collected → send email
      setSending(true);
      setChat((prev) => [
        ...prev,
        { who: "bot", text: "Sending..." },
      ]);
      try {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: newData.name,
            from_email: newData.email,
            subject: newData.subject,
            message: newData.message,
            to_email: "rohitsakhalkar3@gmail.com",
          },
          PUBLIC_KEY
        );
        setChat((prev) => [
          ...prev,
          {
            who: "bot",
            text: `✓ Sent. Rohit will reply at ${newData.email} within 24h.`,
          },
        ]);
        setDone(true);
      } catch {
        setError("Something went wrong. Try emailing directly: rohitsakhalkar3@gmail.com");
        setChat((prev) => [
          ...prev,
          { who: "bot", text: "Hmm, that didn't go through. See the error below." },
        ]);
      } finally {
        setSending(false);
      }
    }
  };

  const isLongField = steps[stepIdx]?.field === "message";

  return (
    <div className="w-full max-w-2xl mx-auto font-mono flex flex-col gap-4">
      {/* Chat window */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 min-h-64 max-h-96 overflow-y-auto space-y-3">
        {chat.map((bubble, i) => (
          <div
            key={i}
            className={`flex ${bubble.who === "user" ? "justify-end" : "justify-start"}`}
          >
            <span
              className={`inline-block px-3 py-2 rounded-lg text-sm max-w-[80%] ${
                bubble.who === "bot"
                  ? "bg-zinc-800 text-zinc-200"
                  : "bg-emerald-900 text-emerald-200"
              }`}
            >
              {bubble.who === "bot" && (
                <span className="text-emerald-500 mr-1">AI</span>
              )}
              {bubble.text}
            </span>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input row */}
      {!done && !sending && (
        <div className="flex gap-2">
          {isLongField ? (
            <textarea
              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder={steps[stepIdx]?.placeholder}
              rows={3}
              className="flex-1 bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-sm text-zinc-100 outline-none focus:border-emerald-500 resize-none placeholder:text-zinc-600"
            />
          ) : (
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={steps[stepIdx]?.placeholder}
              className="flex-1 bg-zinc-900 border border-zinc-700 rounded px-3 py-2 text-sm text-zinc-100 outline-none focus:border-emerald-500 placeholder:text-zinc-600"
            />
          )}
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded text-sm transition-colors"
          >
            Send
          </button>
        </div>
      )}

      {error && (
        <p className="text-red-400 text-xs">{error}</p>
      )}

      {done && (
        <button
          onClick={() => {
            setChat([{ who: "bot", text: steps[0].botMsg }]);
            setData({ name: "", subject: "", message: "", email: "" });
            setStepIdx(0);
            setInput("");
            setDone(false);
            setError("");
          }}
          className="text-xs text-zinc-500 hover:text-zinc-300 underline"
        >
          Send another message
        </button>
      )}
    </div>
  );
}
