import type { Metadata } from "next";
import { ProjectIndex } from "../../components/projects/project-index";

export const metadata: Metadata = {
  title: "Project Archive | Rohit Sakhalkar",
  description: "A collection of Rohit Sakhalkar's experiments, tools, and applications.",
};

export default function ProjectsPage() {
  return <ProjectIndex />;
}
