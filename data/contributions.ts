export type Contribution = {
  repository: string;
  project: string;
  pullRequest: string;
  status: "MERGED" | "OPEN";
  summary: string;
  details: string;
  concepts: string;
  url: string;
};

export const contributions: Contribution[] = [
  {
    repository: "Lucy-Robotics/huri-modules",
    project: "HuRI Modules",
    pullRequest: "PR #53",
    status: "MERGED",
    summary: "Improved lazy loading for Qdrant-related client imports.",
    details:
      "Moved imports into the relevant functions where appropriate, used TYPE_CHECKING and forward references where needed, updated tests, and addressed maintainer feedback.",
    concepts: "LAZY IMPORTS · TYPE_CHECKING · TESTS · CODE REVIEW",
    url: "https://github.com/Lucy-Robotics/huri-modules/pull/53",
  },
  {
    repository: "ogmanojdev/nse-trader-skill",
    project: "NSE Trader Skill",
    pullRequest: "PR #14",
    status: "OPEN",
    summary: "Improved handling of root-level dotfiles.",
    details:
      "Preserved .claude-plugin as an expected entry, added regression test coverage, and tested the behavior using the project's unittest setup.",
    concepts: "DOTFILES · REGRESSION TESTING · UNITTEST",
    url: "https://github.com/ogmanojdev/nse-trader-skill/pull/14",
  },
];
