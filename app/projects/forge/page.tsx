import type { Metadata } from "next";
import { ProjectCaseStudy } from "../../../components/projects/project-case-study";
import { projects } from "../../../data/projects";

export const metadata: Metadata = {
  title: "Forge | Rohit Sakhalkar",
  description: "A Python CLI toolkit for development and everyday system operations.",
};

export default function ForgePage() {
  return <ProjectCaseStudy project={projects[1]} />;
}
