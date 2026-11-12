import type { CuratedProject } from "@/lib/project-types";

export const curatedProjects: CuratedProject[] = [
  {
    id: "get-it-done",
    slug: "get-it-done",
    name: "Get It Done",
    description:
      "A social and freelancing platform that brings community interaction and real gigs together. The project is in progress.",
    repositoryUrl: "https://github.com/Rohitsakhalkar/get_it_done",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "SQLite", "pytest"],
    topics: ["REST APIs"],
    category: "Backend",
    status: "In progress",
    featuredPriority: 1,
    dossier: {
      problem:
        "Connect people who need small tasks completed with people who can do them, while bringing social interaction into the same platform.",
      architecture:
        "A FastAPI backend organized around user, post, capability, follow, and task routes, with SQLAlchemy persistence and SQLite for development and tests.",
      implemented: [
        "User signup, login, and profile updates",
        "Posts, feeds, and user post routes",
        "Capability and follow/unfollow routes",
        "Task creation, reading, updates, and location-filtered listings",
      ],
      inProgress: [
        "The broader task lifecycle. The current API supports task creation and updates; the full assigned, started, completed, and cancellation flow is not yet exposed.",
      ],
      planned: [
        "Separate direct and task-related messaging",
        "Moderation workflows",
        "Cancellation that requires agreement from both parties",
      ],
      testing:
        "pytest tests cover users, posts, follows, capabilities, login, and task behavior, including invalid task input.",
      notes: [],
    },
  },
  {
    id: "forge",
    slug: "forge",
    name: "Forge",
    description:
      "A modular Python CLI toolkit for managing development environments, package operations, application launching, and file management.",
    repositoryUrl: "https://github.com/Rohitsakhalkar/forge",
    technologies: ["Python", "CLI", "pathlib", "subprocess", "venv", "JSON"],
    topics: [],
    category: "Automation",
    status: "V1 built · evolving",
    featuredPriority: 2,
    dossier: {
      problem:
        "Bring common development and system operations into one Python command-line toolkit.",
      architecture:
        "A modular CLI connects Python environment management, file operations, application management, scanning, and a lightweight JSON data layer.",
      implemented: [
        "Create virtual environments and install, upgrade, and uninstall packages",
        "Create, remove, copy, rename, and inspect files and directories",
        "Launch registered applications and scan executable paths",
        "Persist application and executable data in JSON",
      ],
      inProgress: [],
      planned: [],
      notes: [
        "The repository describes Forge as experimental and still evolving. It is primarily Windows-oriented, and application paths can be machine-specific.",
      ],
    },
  },
  {
    id: "data-structures",
    slug: "data-structures",
    name: "Data Structures Package",
    description:
      "From-scratch implementations of fundamental data structures with pytest coverage for edge cases, traversal operations, and boundary conditions.",
    repositoryUrl: "https://github.com/Rohitsakhalkar/datastructures",
    technologies: ["Python", "pytest"],
    topics: [
      "Stack",
      "Queue",
      "Linked Lists",
      "Binary Search Tree",
      "Data Structures & Algorithms",
    ],
    category: "Data Structures",
    status: "Built",
    featuredPriority: 3,
    dossier: {
      problem:
        "Practice fundamental data structures through independent Python implementations and automated tests.",
      architecture:
        "A Python package organizes core data structures as reusable implementations with pytest coverage.",
      implemented: [
        "Stack",
        "Queue",
        "Singly linked list",
        "Doubly linked list",
        "Binary search tree",
      ],
      inProgress: [],
      planned: [],
      testing:
        "The repository README describes pytest coverage for empty and single-element structures, invalid indexes, removals, searches, tree deletion, and boundary conditions.",
      notes: [],
    },
  },
  {
    id: "learnable",
    slug: "learnable",
    name: "LearnAble",
    description:
      "A Next.js and Firebase learning platform with user-selectable accessibility modes and Firestore-backed course, lesson, quiz, and learner-progress models.",
    repositoryUrl: "https://github.com/Rohitsakhalkar/learnable",
    homepageUrl: "https://learnable-tawny.vercel.app",
    technologies: ["TypeScript", "Next.js", "React", "Firebase", "Firestore"],
    topics: ["Accessibility", "Learning platform"],
    category: "Web Development",
    featuredPriority: 4,
    dossier: {
      problem:
        "Build a learning platform that supports learners with different accessibility preferences.",
      architecture:
        "A Next.js App Router application uses Firebase Authentication and Firestore-backed services for course, lesson, quiz, profile, settings, and learner-progress data.",
      implemented: [
        "User-selectable voice, visual, simplified, and standard accessibility modes",
        "Persistence of accessibility and visual preferences in Firestore",
        "Firestore services and data models for courses, lessons, quizzes, and learner progress",
        "An accessible-learning landing page and feature exploration page",
      ],
      inProgress: [],
      planned: [],
      notes: [
        "The repository README is empty. The details here are limited to features and data models visible in the repository source.",
      ],
    },
  },
];
