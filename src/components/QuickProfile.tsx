"use client";

import { useEffect, useRef, useState } from "react";
import { personal } from "@/lib/data";

export default function QuickProfile() {
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
        className="min-h-11 rounded-lg border border-zinc-700 bg-zinc-950/60 px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
      >
        Quick profile
      </button>
      {open && (
        <dialog
          ref={dialogRef}
          aria-labelledby="profile-title"
          onClose={() => setOpen(false)}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              dialogRef.current?.close();
            }
          }}
          className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-xl border border-zinc-700 bg-[#101720] p-0 text-zinc-100 shadow-2xl backdrop:bg-black/80"
        >
          <div className="p-5 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-emerald-400">
                  Explorer profile
                </p>
                <h2
                  id="profile-title"
                  className="mt-2 text-2xl font-semibold tracking-tight"
                >
                  {personal.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label="Close quick profile"
                className="rounded-md border border-zinc-700 px-3 py-1 text-sm text-zinc-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                Close
              </button>
            </div>
            <p className="mt-3 text-sm text-zinc-300">{personal.title}</p>
            <p className="mt-2 text-sm text-zinc-400">{personal.location}</p>
            <div className="mt-6 grid gap-3 border-t border-zinc-800 pt-5 sm:grid-cols-2">
              <a
                href={`mailto:${personal.email}`}
                className="break-all text-sm text-emerald-300 underline decoration-emerald-900 underline-offset-4 hover:text-emerald-200"
              >
                {personal.email}
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-300 hover:text-white"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-300 hover:text-white"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
