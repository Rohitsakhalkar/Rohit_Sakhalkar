import type { Metadata } from "next";
import { Contributions } from "../../components/contributions/contributions";

export const metadata: Metadata = {
  title: "Open Source Contributions | Rohit Sakhalkar",
  description: "Open-source contributions by Rohit Sakhalkar across real projects and pull requests.",
};

export default function ContributionsPage() {
  return (
    <main>
      <Contributions standalone />
    </main>
  );
}
