"use client";

import { useEffect, useRef, useState } from "react";
import Terminal from "@/components/Terminal";

export default function TerminalDock() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open && dialog && !dialog.open) dialog.showModal();
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-16 right-3 z-40 min-h-10 rounded-lg border border-emerald-900 bg-[#101720] px-3 font-mono text-xs text-emerald-300 shadow-lg transition-colors hover:border-emerald-600 hover:bg-[#151e29] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 sm:right-5 lg:bottom-5"
        aria-haspopup="dialog"
      >
        <span aria-hidden="true">&gt;_ </span>Developer console
      </button>
      {open && (
        <dialog
          ref={dialogRef}
          aria-labelledby="terminal-dialog-title"
          onClose={() => setOpen(false)}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              dialogRef.current?.close();
            }
          }}
          className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-1rem)] max-w-3xl overflow-y-auto rounded-xl border border-zinc-700 bg-[#101720] p-4 text-zinc-100 shadow-2xl backdrop:bg-black/80 sm:p-6"
        >
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                Simulated console
              </p>
              <h2
                id="terminal-dialog-title"
                className="mt-1 text-lg font-semibold"
              >
                Explore ROHIT.EXE
              </h2>
            </div>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="min-h-10 rounded-md border border-zinc-700 px-3 text-sm text-zinc-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              Close
            </button>
          </div>
          <Terminal />
        </dialog>
      )}
    </>
  );
}
