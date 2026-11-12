import ChatForm from "@/components/ChatForm";
import LocationHeader from "@/components/LocationHeader";
import { personal } from "@/lib/data";

export const metadata = {
  title: "Contact | Rohit Sakhalkar",
  description:
    "Contact Rohit Sakhalkar through email, GitHub, LinkedIn, or the EmailJS message form.",
};

export default function ContactPage() {
  return (
    <div className="location-scene mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
      <LocationHeader
        sector="05 / 05"
        name="Contact"
        title="Get in touch"
        description="For a project, opportunity, or technology conversation, contact me directly or use the message form."
      />

      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="h-fit rounded-xl border border-zinc-800 bg-[#101720] p-5 sm:p-6">
          <p className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">
            Direct channels
          </p>
          <h2 className="mt-2 text-lg font-semibold text-zinc-100">
            Find me elsewhere
          </h2>
          <ul className="mt-5 divide-y divide-zinc-800">
            <li className="py-4 first:pt-0">
              <a
                href={`mailto:${personal.email}`}
                className="break-all text-sm text-zinc-200 underline decoration-zinc-700 underline-offset-4 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
              >
                {personal.email}
              </a>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-zinc-600">
                Email
              </p>
            </li>
            <li className="py-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-200 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-zinc-600">
                Code
              </p>
            </li>
            <li className="py-4 last:pb-0">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-200 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-zinc-600">
                Professional profile
              </p>
            </li>
          </ul>
        </aside>

        <section className="rounded-xl border border-emerald-900/50 bg-[#101720] p-5 sm:p-6">
          <p className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">
            Email form
          </p>
          <h2 className="mt-2 text-lg font-semibold text-zinc-100">
            Send a message
          </h2>
          <p className="mt-1 text-sm leading-6 text-zinc-400">
            Complete a few short prompts. A confirmation appears after EmailJS
            reports successful delivery.
          </p>
          <div className="mt-5">
            <ChatForm />
          </div>
        </section>
      </div>
    </div>
  );
}
