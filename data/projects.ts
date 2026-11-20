export type ProjectSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  status: string;
  role?: string;
  description: string;
  repository: string;
  stack: string;
  visual: "get-it-done" | "forge" | "data-structures" | "learnable";
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "get-it-done",
    number: "01",
    title: "Get It Done",
    eyebrow: "PROJECT / BACKEND FIRST",
    subtitle: "A platform connecting people through local opportunities, skills, and small tasks.",
    status: "IN DEVELOPMENT · BACKEND FIRST",
    role: "SOLO DEVELOPER",
    description: "Get It Done is a platform concept designed around connecting people through local opportunities and practical skills. The current focus is building reliable backend functionality before starting the frontend.",
    repository: "https://github.com/Rohitsakhalkar/get_it_done",
    stack: "PYTHON · FASTAPI · SQLALCHEMY · SQLITE · PYDANTIC · PYTEST · JWT",
    visual: "get-it-done",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "The idea is to create a place where people can discover opportunities, share their capabilities, and connect around small tasks while incorporating a social layer.",
          "I am developing the project backend-first, using the work to explore API boundaries, data modeling, authentication, and testable core functionality.",
        ],
      },
      {
        title: "Motivation",
        paragraphs: [
          "The platform is intended to explore how local communities could connect people who need something done with people who have the skills to do it. It is an exploration of that idea, not a claim that a real marketplace is already operating.",
        ],
      },
      {
        title: "Architecture and implementation",
        paragraphs: [
          "The current backend follows a modular FastAPI structure with SQLAlchemy models, repository modules, Pydantic schemas, authentication, and SQLite database development. The test setup uses an isolated database configuration and dependency overrides for backend tests.",
        ],
        bullets: [
          "Modular FastAPI backend",
          "SQLAlchemy models and repository modules",
          "Pydantic schemas and validation",
          "Password hashing and JWT authentication",
          "Database session management and transaction handling",
          "Isolated SQLite test setup",
        ],
      },
      {
        title: "Implemented functionality",
        bullets: [
          "User registration, login, profiles, and search",
          "Posts and capabilities/skills management",
          "Follow and unfollow with follower and following data",
          "Task creation, retrieval, updates, and discovery",
          "Location-related filtering and pagination where implemented",
          "Database constraints, exception handling, and transaction rollback",
          "Automated tests for backend behavior",
        ],
      },
      {
        title: "Current state and future direction",
        paragraphs: [
          "The backend is still under development. The current priority is finishing core backend functions before selecting and building the frontend.",
        ],
        bullets: [
          "Full task assignment and lifecycle transitions",
          "Mutual cancellation flow",
          "Messaging and notifications",
          "Moderation and reporting",
          "Frontend and production deployment",
        ],
      },
    ],
  },
  {
    slug: "forge",
    number: "02",
    title: "Forge",
    eyebrow: "PROJECT / PYTHON TOOLING",
    subtitle: "A Python CLI toolkit for development and everyday system operations.",
    status: "COMPLETED · V1",
    role: "SOLO DEVELOPER",
    description: "Forge started as a Python environment manager and evolved into a modular command-line toolkit containing utilities for development and everyday system operations.",
    repository: "https://github.com/Rohitsakhalkar/forge",
    stack: "PYTHON · CLI · PATHLIB · SUBPROCESS · VENV · JSON",
    visual: "forge",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Forge began with a practical question: could common Python environment and system operations be gathered into one command-line toolkit? As the project grew, it expanded into utilities for files, applications, executables, and task history.",
        ],
      },
      {
        title: "Implemented functionality",
        bullets: [
          "Python virtual environment creation and management",
          "Package installation, removal, and upgrades",
          "Running Python scripts",
          "File and directory operations",
          "Application registration and launching",
          "Executable discovery and path resolution",
          "JSON-backed application, executable, and task-history storage",
        ],
      },
      {
        title: "Engineering details",
        paragraphs: [
          "The project is organized around a CLI surface and modular utilities. It uses Python's filesystem and subprocess APIs to interact with environments and the operating system, with JSON persistence for application, executable, and task-history data.",
        ],
        bullets: [
          "Command-line interface design",
          "Filesystem operations with pathlib",
          "System interaction through subprocess",
          "Python environment management with venv",
          "Small, focused modules for growing functionality",
        ],
      },
      {
        title: "What I learned",
        paragraphs: [
          "Forge taught me how quickly a useful tool can grow beyond its first idea. It gave me practice designing a CLI, handling system operations, working with environment and package commands, and breaking a growing project into modules.",
        ],
      },
      {
        title: "Limitations and future improvements",
        paragraphs: [
          "Forge is an experimental V1 toolkit. Future work can focus on refinement, consistency, and additional robustness; it should not be presented as production-ready software.",
        ],
      },
    ],
  },
  {
    slug: "data-structures",
    number: "03",
    title: "Data Structures",
    eyebrow: "PROJECT / PYTHON PACKAGE",
    subtitle: "Exploring the mechanics behind fundamental data structures through Python implementations.",
    status: "COMPLETED",
    description: "A Python package implementing fundamental data structures from scratch to explore node-based storage, object-oriented programming, recursion, iteration, and the internal mechanics of common structures.",
    repository: "https://github.com/Rohitsakhalkar/datastructures",
    stack: "PYTHON · OOP · PYTEST · SETUPTOOLS",
    visual: "data-structures",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This project focuses on understanding how common structures work internally instead of only using built-in collections. Implementing them from scratch made the relationships between nodes, operations, iteration, and edge cases more visible.",
        ],
      },
      {
        title: "Implemented structures",
        bullets: [
          "Stack",
          "Queue",
          "Singly Linked List",
          "Doubly Linked List",
          "Binary Search Tree",
        ],
      },
      {
        title: "Technical focus",
        bullets: [
          "Node-based storage and relationships",
          "Iteration and Python special methods",
          "Index-based linked-list operations",
          "Binary search tree insertion, search, deletion, and traversals",
          "Recursion, testing, and packaging",
        ],
      },
      {
        title: "Learning focus",
        paragraphs: [
          "Writing each structure helped me reason about how operations change internal relationships and how different implementations behave. It also gave me a focused way to practice object-oriented design, iteration, recursion, and testing edge cases.",
        ],
      },
      {
        title: "Testing and future improvements",
        paragraphs: [
          "The package uses pytest for its tests and setuptools for packaging. I am not presenting a test count or benchmark result here. Future improvements can continue expanding edge-case coverage and package refinement.",
        ],
      },
    ],
  },
  {
    slug: "learnable",
    number: "04",
    title: "LearnAble",
    eyebrow: "PROJECT / ACCESSIBLE E-LEARNING",
    subtitle: "An accessible e-learning platform built around different ways of learning and interacting.",
    status: "PROTOTYPE · FINAL SEMESTER PROJECT",
    role: "SOLO DEVELOPER",
    description: "LearnAble is an e-learning platform prototype designed to explore different accessibility and interaction experiences, including voice-assisted, visual, simplified, and standard learning experiences.",
    repository: "https://github.com/Rohitsakhalkar/learnable",
    stack: "NEXT.JS · REACT · TYPESCRIPT · TAILWIND CSS · FIREBASE · WEB SPEECH API · N8N",
    visual: "learnable",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Rather than forcing everyone into a single interface, LearnAble explores multiple ways of interacting with digital learning. It was built independently as a final-semester project combining frontend development, authentication, learning functionality, accessibility features, and integrations.",
        ],
      },
      {
        title: "Motivation",
        paragraphs: [
          "The project explores how an e-learning experience can adapt to different preferences and interaction needs. Its modes are a prototype study of voice assistance, visual adjustments, simplified navigation, and a conventional learning experience.",
        ],
      },
      {
        title: "Accessibility modes",
        bullets: [
          "Voice-assisted: speech recognition, spoken feedback, navigation commands, and contextual commands",
          "Visual: zoom, font-weight adjustments, theme or contrast preferences, and color-vision filters",
          "Simplified: a streamlined interface intended to reduce complexity",
          "Standard: a conventional learning experience",
        ],
      },
      {
        title: "Implemented functionality",
        bullets: [
          "Authentication and accessibility preference persistence",
          "Courses, lessons, and learning progress",
          "Video progress, quizzes, and scores",
          "Analytics and user settings/profile",
          "Voice navigation and speech feedback",
          "Optional AI response integration through a configured n8n webhook",
        ],
      },
      {
        title: "Engineering details and lessons",
        paragraphs: [
          "LearnAble brought together multiple interaction modes, browser speech APIs, authentication, learning progress, and preference management in one application. It gave me practice thinking about accessibility as part of the application structure instead of treating it as a final visual adjustment.",
        ],
      },
      {
        title: "Current limitations and future improvements",
        paragraphs: [
          "LearnAble is a prototype, not a production-ready platform. Future work includes broader accessibility validation, browser compatibility checks, more reliable voice interactions, end-to-end testing, security-rule review, and deployment work.",
        ],
      },
    ],
  },
];
