"use client";

import { useState, useRef, useEffect, type FormEvent, type KeyboardEvent } from "react";
import emailjs from "@emailjs/browser";
import { personal } from "@/lib/data";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

interface Step {
  prompt: string;
  field: "name" | "subject" | "message" | "email";
  placeholder: string;
}

const steps: Step[] = [
  { prompt: "What’s your name?", field: "name", placeholder: "Your name" },
  {
    prompt: "What would you like to talk about?",
    field: "subject",
    placeholder: "Opportunity, project, or a question",
  },
  {
    prompt: "Write your message.",
    field: "message",
    placeholder: "Your message",
  },
  {
    prompt: "What email address can Rohit reply to?",
    field: "email",
    placeholder: "you@example.com",
  },
];

type FormData = { name: string; subject: string; message: string; email: string };
type ChatBubble = { who: "form" | "user"; text: string };

const initialForm: FormData = { name: "", subject: "", message: "", email: "" };

export default function ChatForm() {
  const [stepIdx, setStepIdx] = useState(0);
  const [data, setData] = useState<FormData>(initialForm);
  const [input, setInput] = useState("");
  const [chat, setChat] = useState<ChatBubble[]>([
    { who: "form", text: steps[0].prompt },
  ]);
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [canRetry, setCanRetry] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const sendingRef = useRef(false);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [chat]);

  async function sendMessage(message: FormData) {
    if (sendingRef.current) return;
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError(
        `The contact form is not configured. Please email ${personal.email} directly.`
      );
      setCanRetry(false);
      return;
    }

    sendingRef.current = true;
    setSending(true);
    setError("");
    setCanRetry(false);
    setChat((previous) => [...previous, { who: "form", text: "Sending message…" }]);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: message.name,
          from_email: message.email,
          subject: message.subject,
          message: message.message,
          to_email: personal.email,
        },
        PUBLIC_KEY
      );
      setChat((previous) => [
        ...previous,
        { who: "form", text: "Message sent. Thanks for getting in touch." },
      ]);
      setDone(true);
    } catch (submissionError) {
      console.error("EmailJS contact submission failed", submissionError);
      setError(
        `Your message could not be sent. Please try again or email ${personal.email} directly.`
      );
      setCanRetry(true);
      setChat((previous) => [
        ...previous,
        { who: "form", text: "The message did not go through." },
      ]);
    } finally {
      sendingRef.current = false;
      setSending(false);
    }
  }

  function handleSend() {
    const value = input.trim();
    const step = steps[stepIdx];
    const activeControl =
      step.field === "message" ? textareaRef.current : inputRef.current;
    if (!value) {
      setError("Please enter a response before continuing.");
      activeControl?.focus();
      return;
    }
    if (step.field === "email" && inputRef.current) {
      if (!inputRef.current.checkValidity()) {
        inputRef.current.reportValidity();
        return;
      }
    }

    const nextData = { ...data, [step.field]: value };
    setData(nextData);
    setInput("");
    setError("");
    setCanRetry(false);
    setChat((previous) => [...previous, { who: "user", text: value }]);

    const nextStep = stepIdx + 1;
    if (nextStep < steps.length) {
      window.setTimeout(() => {
        setChat((previous) => [
          ...previous,
          { who: "form", text: steps[nextStep].prompt },
        ]);
        setStepIdx(nextStep);
      }, 250);
    } else {
      void sendMessage(nextData);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleSend();
  }

  function handleTextareaKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  }

  const isLongField = steps[stepIdx]?.field === "message";
  const currentStep = steps[stepIdx];

  return (
    <div className="w-full font-mono">
      <div
        className="flex min-h-52 max-h-80 flex-col gap-3 overflow-y-auto rounded-xl border border-zinc-800 bg-[#111113] p-4 sm:min-h-60 sm:p-5"
        role="log"
        aria-label="Contact form conversation"
        aria-live="polite"
        aria-relevant="additions text"
      >
        {chat.map((bubble, index) => (
          <div
            key={`${bubble.who}-${index}`}
            className={`flex ${bubble.who === "user" ? "justify-end" : "justify-start"}`}
          >
            <p
              className={`max-w-[88%] wrap-break-word rounded-xl px-3 py-2 text-sm leading-6 ${
                bubble.who === "form"
                  ? "bg-zinc-800 text-zinc-200"
                  : "bg-emerald-950 text-emerald-100"
              }`}
            >
              {bubble.who === "form" && (
                <span className="mr-2 font-sans text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                  Contact
                </span>
              )}
              {bubble.text}
            </p>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {!done && !sending && (
        <form onSubmit={handleSubmit} className="mt-3 flex items-end gap-2">
          {isLongField ? (
            <textarea
              ref={textareaRef}
              aria-label={currentStep.prompt}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleTextareaKeyDown}
              placeholder={currentStep.placeholder}
              required
              maxLength={5000}
              rows={3}
              className="min-w-0 flex-1 resize-y rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2.5 text-sm text-zinc-100 outline-none placeholder:text-zinc-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
          ) : (
            <input
              ref={inputRef}
              type={currentStep.field === "email" ? "email" : "text"}
              aria-label={currentStep.prompt}
              autoComplete={
                currentStep.field === "name"
                  ? "name"
                  : currentStep.field === "email"
                    ? "email"
                    : "off"
              }
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={currentStep.placeholder}
              required
              maxLength={currentStep.field === "email" ? 254 : 150}
              className="min-w-0 flex-1 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2.5 text-sm text-zinc-100 outline-none placeholder:text-zinc-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
          )}
          <button
            type="submit"
            className="min-h-11 shrink-0 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
          >
            Send
          </button>
        </form>
      )}

      {error && (
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <p role="alert" className="text-sm leading-6 text-red-300">
            {error}
          </p>
          {canRetry && !done && (
            <button
              type="button"
              onClick={() => void sendMessage(data)}
              className="shrink-0 text-sm text-zinc-200 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
            >
              Try again
            </button>
          )}
        </div>
      )}

      {sending && (
        <p role="status" className="mt-3 text-sm text-zinc-400">
          Sending your message…
        </p>
      )}

      {done && (
        <button
          type="button"
          onClick={() => {
            setChat([{ who: "form", text: steps[0].prompt }]);
            setData(initialForm);
            setStepIdx(0);
            setInput("");
            setDone(false);
            setError("");
            setCanRetry(false);
          }}
          className="mt-4 text-sm text-zinc-400 underline underline-offset-4 hover:text-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
        >
          Send another message
        </button>
      )}
    </div>
  );
}
