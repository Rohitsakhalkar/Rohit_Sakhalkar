"use client";

import { useState, useEffect, useRef, KeyboardEvent } from "react";
import { commands, bootLines, personal } from "@/lib/data";
import { useRouter } from "next/navigation";

interface Line {
  type: "boot" | "input" | "output" | "error";
  text: string;
}

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [booted, setBooted] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Boot sequence — stream lines one by one
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < bootLines.length) {
        setLines((prev) => [...prev, { type: "boot", text: bootLines[i] }]);
        i++;
      } else {
        clearInterval(interval);
        setBooted(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    }, 280);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const handleCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    setHistory((prev) => [cmd, ...prev]);
    setHistoryIndex(-1);
    setLines((prev) => [...prev, { type: "input", text: `$ ${raw}` }]);

    if (cmd === "clear") {
      setLines([]);
      return;
    }

    if (cmd === "github") {
      window.open(personal.github, "_blank");
      setLines((prev) => [
        ...prev,
        { type: "output", text: "→ Opening GitHub..." },
      ]);
      return;
    }

    if (cmd === "contact") {
      setLines((prev) => [
        ...prev,
        { type: "output", text: "→ Navigating to /contact..." },
      ]);
      setTimeout(() => router.push("/contact"), 600);
      return;
    }

    if (cmd === "projects") {
      setLines((prev) => [
        ...prev,
        { type: "output", text: "→ Navigating to /projects..." },
      ]);
      setTimeout(() => router.push("/projects"), 600);
      return;
    }

    const result = commands[cmd];
    if (result) {
      const outputs = Array.isArray(result) ? result : [result];
      outputs.forEach((line) =>
        setLines((prev) => [...prev, { type: "output", text: line }])
      );
    } else {
      setLines((prev) => [
        ...prev,
        {
          type: "error",
          text: `Command not found: ${cmd}. Type 'help' for available commands.`,
        },
      ]);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
    if (e.key === "ArrowUp") {
      const idx = Math.min(historyIndex + 1, history.length - 1);
      setHistoryIndex(idx);
      setInput(history[idx] ?? "");
    }
    if (e.key === "ArrowDown") {
      const idx = Math.max(historyIndex - 1, -1);
      setHistoryIndex(idx);
      setInput(idx === -1 ? "" : history[idx]);
    }
  };

  return (
    <div
      className="w-full max-w-3xl mx-auto font-mono text-sm"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal window chrome */}
      <div className="rounded-lg overflow-hidden border border-zinc-700 shadow-2xl">
        {/* Title bar */}
        <div className="bg-zinc-800 px-4 py-2.5 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-auto text-zinc-500 text-xs">rohit.dev — bash</span>
        </div>

        {/* Terminal body */}
        <div className="bg-zinc-950 p-4 min-h-[320px] max-h-[480px] overflow-y-auto space-y-1 cursor-text">
          {lines.map((line, i) => (
            <div
              key={i}
              className={
                line.type === "input"
                  ? "text-emerald-400"
                  : line.type === "error"
                  ? "text-red-400"
                  : line.type === "boot"
                  ? "text-zinc-400"
                  : "text-zinc-200"
              }
            >
              {line.text}
            </div>
          ))}

          {/* Input row */}
          {booted && (
            <div className="flex items-center gap-2 text-emerald-400">
              <span>$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-emerald-400 caret-emerald-400"
                spellCheck={false}
                autoCapitalize="off"
                autoCorrect="off"
              />
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      <p className="text-center text-zinc-600 text-xs mt-3">
        ↑↓ history · Enter to run · try `help`
      </p>
    </div>
  );
}
