"use client";

import { useState, useEffect, useRef, KeyboardEvent } from "react";
import { commands, bootLines, personal } from "@/lib/data";
import { useRouter } from "next/navigation";

interface Line {
  type: "boot" | "input" | "output" | "error";
  text: string;
}

const commandSuggestions = ["help", "projects", "skills", "experience", "contact"];

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [booted, setBooted] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < bootLines.length) {
        setLines((prev) => [...prev, { type: "boot", text: bootLines[i] }]);
        i++;
      } else {
        clearInterval(interval);
        setBooted(true);
      }
    }, 280);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const output = outputRef.current;
    if (output) output.scrollTop = output.scrollHeight;
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
      window.open(personal.github, "_blank", "noopener,noreferrer");
      setLines((prev) => [
        ...prev,
        { type: "output", text: "→ Opening GitHub..." },
      ]);
      return;
    }

    const destinations: Record<string, string> = {
      about: "/about",
      skills: "/skills",
      experience: "/experience",
      education: "/about",
      projects: "/projects",
      contact: "/contact",
    };
    const destination = destinations[cmd];
    const result = commands[cmd];
    if (result) {
      const outputs = Array.isArray(result) ? result : [result];
      outputs.forEach((line) =>
        setLines((prev) => [...prev, { type: "output", text: line }])
      );
    } else if (destination) {
      setLines((prev) => [
        ...prev,
        { type: "output", text: `→ Opening ${destination}...` },
      ]);
    } else {
      setLines((prev) => [
        ...prev,
        {
          type: "error",
          text: `Command not found: ${cmd}. Type 'help' for available commands.`,
        },
      ]);
    }

    if (destination) {
      window.setTimeout(() => router.push(destination), 300);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const idx = Math.min(historyIndex + 1, history.length - 1);
      setHistoryIndex(idx);
      setInput(history[idx] ?? "");
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
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
          <span className="ml-auto text-zinc-500 text-xs">
            ROHIT.EXE / portfolio console
          </span>
        </div>

        {/* Terminal body */}
        <div
          ref={outputRef}
          className="bg-zinc-950 p-4 min-h-55 max-h-105 overflow-y-auto space-y-1 cursor-text sm:min-h-70"
          role="log"
          aria-label="Portfolio terminal output"
          aria-live="polite"
          aria-relevant="additions text"
        >
          {lines.map((line, i) => (
            <div
              key={i}
              className={`wrap-break-word ${
                line.type === "input"
                  ? "text-emerald-400"
                  : line.type === "error"
                  ? "text-red-400"
                  : line.type === "boot"
                  ? "text-zinc-400"
                  : "text-zinc-200"
              }`}
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
                aria-label="Enter a portfolio terminal command"
                className="min-w-0 flex-1 bg-transparent outline-none text-emerald-400 caret-emerald-400 focus-visible:outline-2 focus-visible:outline-emerald-400"
                spellCheck={false}
                autoCapitalize="off"
                autoCorrect="off"
              />
            </div>
          )}

        </div>
      </div>

      <p className="text-center text-zinc-600 text-xs mt-3">
        ↑↓ history · Enter to run · simulated commands only
      </p>
      <div
        className="mt-3 flex flex-wrap justify-center gap-2"
        aria-label="Suggested terminal commands"
      >
        {commandSuggestions.map((command) => (
          <button
            key={command}
            type="button"
            onClick={() => handleCommand(command)}
            className="min-h-9 rounded-md border border-zinc-800 px-2.5 font-mono text-[10px] text-zinc-400 hover:border-emerald-800 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
          >
            {command}
          </button>
        ))}
      </div>
    </div>
  );
}
