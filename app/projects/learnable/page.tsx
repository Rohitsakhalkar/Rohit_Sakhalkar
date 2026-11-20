import type { Metadata } from "next";
import { ProjectCaseStudy } from "../../../components/projects/project-case-study";
import { projects } from "../../../data/projects";

export const metadata: Metadata = {
  title: "LearnAble | Rohit Sakhalkar",
  description: "An accessible e-learning platform prototype built around different interaction experiences.",
};

export default function LearnablePage() {
  return <ProjectCaseStudy project={projects[3]} />;
}
