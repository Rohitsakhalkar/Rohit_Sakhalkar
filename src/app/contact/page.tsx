import ChatForm from "@/components/ChatForm";
import { personal } from "@/lib/data";

export const metadata = {
  title: "Contact — Rohit Sakhalkar",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 space-y-8">
      <div className="font-mono">
        <div className="text-zinc-500 text-xs mb-1">$ rohit --contact</div>
        <h1 className="text-2xl font-bold text-zinc-100">Say Something</h1>
        <p className="text-zinc-500 text-sm mt-1">
          It goes straight to{" "}
          <a href={`mailto:${personal.email}`} className="text-emerald-500 hover:underline">
            {personal.email}
          </a>
          . No spam filter, no ticketing system.
        </p>
      </div>

      <ChatForm />

      <div className="font-mono text-xs text-zinc-700 space-y-1 pt-4 border-t border-zinc-900">
        <p># or just reach out directly:</p>
        <p>
          email →{" "}
          <a href={`mailto:${personal.email}`} className="text-zinc-500 hover:text-zinc-300">
            {personal.email}
          </a>
        </p>
        <p>
          github →{" "}
          <a href={personal.github} target="_blank" className="text-zinc-500 hover:text-zinc-300">
            {personal.github}
          </a>
        </p>
      </div>
    </div>
  );
}
