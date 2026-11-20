import type { Metadata } from "next";
import { ProjectCaseStudy } from "../../../components/projects/project-case-study";
import { projects } from "../../../data/projects";

export const metadata: Metadata = {
  title: "Get It Done | Rohit Sakhalkar",
  description: "A backend-first platform concept connecting people through local opportunities, skills, and small tasks.",
};

export default function GetItDonePage() {
  return <ProjectCaseStudy project={projects[0]} />;
}
