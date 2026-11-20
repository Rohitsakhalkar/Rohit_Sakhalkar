import type { Metadata } from "next";
import { ProjectCaseStudy } from "../../../components/projects/project-case-study";
import { projects } from "../../../data/projects";

export const metadata: Metadata = {
  title: "Data Structures | Rohit Sakhalkar",
  description: "A Python package exploring fundamental data structures from scratch.",
};

export default function DataStructuresPage() {
  return <ProjectCaseStudy project={projects[2]} />;
}
