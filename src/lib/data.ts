export const personal = {
  name: "Rohit Sakhalkar",
  title: "Python Developer | Backend Engineering | Automation",
  email: "rohitsakhalkar3@gmail.com",
  location: "Belagavi, Karnataka, India",
  github: "https://github.com/Rohitsakhalkar",
  linkedin: "https://linkedin.com/in/rohitsakhalkar9347",
  summary:
    "I'm Rohit, a Python developer who enjoys turning ideas into working software. I focus on backend engineering, API development, testing and automation, with an interest in building reliable systems and practical developer tools.",
};

export const bootLines = [
  "> Initializing rohit.dev...",
  "> Python development · backend engineering · automation",
  "> Building practical software and developer tools.",
  "> Type `help` to explore this portfolio.",
];

export const commands: Record<string, string | string[]> = {
  help: [
    "Available commands:",
    "  whoami      → introduction",
    "  about       → Knowledge Vault",
    "  skills      → technical toolkit",
    "  projects    → selected work",
    "  experience  → internship and project work",
    "  education   → education details",
    "  contact     → contact page",
    "  github      → open GitHub",
    "  clear       → clear terminal",
  ],
  whoami: [
    "Rohit Sakhalkar — Python developer focused on backend engineering and automation.",
    "I enjoy turning ideas into working software and building practical developer tools.",
  ],
  about: [
    "Knowledge Vault: background, engineering interests, and education.",
  ],
  education: [
    "Bachelor of Computer Applications (BCA)",
    "KLES Gogte College of Commerce · Rani Channamma University · CGPA 8.1",
  ],
  skills: [
    "─── Backend ─────",
    "  Python · FastAPI · REST APIs · SQLAlchemy",
    "─── Data & testing ─",
    "  SQL · SQLite · PostgreSQL (planned) · pytest",
    "─── Frontend ────",
    "  JavaScript · React · Next.js · Tailwind CSS",
    "─── Tools ───────",
    "  Git · GitHub · subprocess · Linux",
  ],
  experience: [
    "Frontend Developer Intern @ Unified Mentor (May–July 2025)",
    "  Hawks Music Player · EBus Management System",
    "  Firebase Auth/Storage · Google Maps API",
    "Project-based automation work for PhazeAi (not employment).",
  ],
  github: ["→ Opening GitHub in a new tab..."],
  clear: [],
};

export const projects = [
  {
    id: "get_it_done",
    slug: "get-it-done",
    title: "Get It Done",
    category: "Backend",
    status: "In progress",
    description:
      "A social and freelancing platform that brings community interaction and real gigs together. The project is in progress.",
    tags: ["Python", "FastAPI", "SQLAlchemy", "SQLite", "REST APIs", "pytest"],
    focus: [
      "Connect people who need small tasks done with people who can do them",
      "FastAPI REST API with SQLAlchemy and SQLite",
      "pytest coverage for backend behavior",
    ],
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
    github: "https://github.com/Rohitsakhalkar/get_it_done",
    live: "",
    featured: true,
  },
  {
    id: "forge",
    slug: "forge",
    title: "Forge",
    category: "Automation",
    status: "V1 built · evolving",
    description:
      "A modular Python CLI toolkit for managing development environments, package operations, application launching, and file management.",
    tags: ["Python", "CLI", "pathlib", "subprocess", "venv", "JSON"],
    focus: [
      "Create virtual environments and manage packages",
      "File operations and application management",
      "Modular CLI with JSON-based application persistence",
    ],
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
      testing: "",
      notes: [
        "The repository describes Forge as experimental and still evolving. It is primarily Windows-oriented, and application paths can be machine-specific.",
      ],
    },
    github: "https://github.com/Rohitsakhalkar/forge",
    live: "",
    featured: true,
  },
  {
    id: "datastructure",
    slug: "data-structures",
    title: "Data Structures Package",
    category: "Fundamentals",
    status: "Built",
    description:
      "From-scratch implementations of fundamental data structures with pytest coverage for edge cases, traversal operations, and boundary conditions.",
    tags: [
      "Python",
      "Stack",
      "Queue",
      "Linked Lists",
      "Binary Search Tree",
      "pytest",
    ],
    focus: [
      "From-scratch data structure implementations",
      "Traversal and boundary-condition coverage",
      "pytest",
    ],
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
      testing: "pytest tests cover edge cases and traversal behavior.",
      notes: [],
    },
    github: "https://github.com/Rohitsakhalkar/datastructures",
    live: "",
    featured: true,
  },
];

export const skillGroups = [
  {
    name: "Languages",
    description: "Programming languages from the current toolkit.",
    technologies: ["Python", "SQL", "JavaScript", "C", "C#"],
  },
  {
    name: "Backend development",
    description: "Core tools used across backend and API projects.",
    technologies: ["Python", "FastAPI", "REST APIs", "SQLAlchemy"],
  },
  {
    name: "Databases",
    description:
      "SQL and relational database tools; PostgreSQL is listed as a planned upgrade for Get It Done.",
    technologies: ["SQL", "SQLite", "PostgreSQL (planned)"],
  },
  {
    name: "Computer science",
    description: "Fundamentals practiced through from-scratch implementations.",
    technologies: ["Data Structures & Algorithms"],
  },
  {
    name: "Testing",
    description: "Testing project behavior, edge cases, and boundary conditions.",
    technologies: ["pytest"],
  },
  {
    name: "Automation",
    description: "Python tools and workflows for development tasks.",
    technologies: ["CLI tools", "subprocess", "Linux"],
  },
  {
    name: "Project engineering",
    description: "Core software practices applied in projects and tests.",
    technologies: ["Unit testing", "Edge-case testing", "Database modeling"],
  },
  {
    name: "Frontend",
    description: "Frontend technologies used in portfolio and internship work.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    name: "Tools",
    description: "Version control and collaboration.",
    technologies: ["Git", "GitHub", "VS Code", "Firebase"],
  },
];

export const education = {
  qualification: "Bachelor of Computer Applications (BCA)",
  institution: "KLES Gogte College of Commerce",
  university: "Rani Channamma University",
  cgpa: "8.1",
};

export const experience = {
  internship: {
    organization: "Unified Mentor",
    role: "Frontend Developer Intern",
    period: "May 2025 – July 2025",
    projects: ["Hawks Music Player", "EBus Management System"],
    details: [
      "Built these projects and worked with Firebase Auth/Storage and Google Maps API.",
    ],
  },
  projectBased: {
    organization: "PhazeAi",
    title: "Automation project",
    description: "Completed project-based work, separate from employment.",
  },
};

export const worldLocations = [
  {
    id: "01",
    name: "Project District",
    label: "Work",
    path: "/projects",
    description: "Explore the software and tools I’ve been building.",
    coordinates: "01 / 05",
  },
  {
    id: "02",
    name: "Engineering Lab",
    label: "Lab",
    path: "/skills",
    description: "Browse the technologies behind my project work.",
    coordinates: "02 / 05",
  },
  {
    id: "03",
    name: "Career Archives",
    label: "Career",
    path: "/experience",
    description: "See my internship and project-based experience.",
    coordinates: "03 / 05",
  },
  {
    id: "04",
    name: "Knowledge Vault",
    label: "Vault",
    path: "/about",
    description: "Learn about my background, education, and approach.",
    coordinates: "04 / 05",
  },
  {
    id: "05",
    name: "Communication Hub",
    label: "Comms",
    path: "/contact",
    description: "Find my contact links and send a message.",
    coordinates: "05 / 05",
  },
];

export const technologyNotes: Record<string, string> = {
  Python: "Used in the Get It Done backend, Forge CLI, and data structures package.",
  SQL: "Used with relational application data and SQLAlchemy models.",
  C: "Listed among the programming languages in my current toolkit.",
  "C#": "Listed among the programming languages in my current toolkit.",
  FastAPI: "Used to expose user, post, follow, capability, and task routes in Get It Done.",
  "REST APIs": "Get It Done exposes REST endpoints for account, social, and task workflows.",
  SQLAlchemy: "Used for relational models and persistence in Get It Done.",
  SQLite: "Used for Get It Done development and testing.",
  "PostgreSQL (planned)": "A planned database upgrade for Get It Done, not presented as an implemented production database.",
  pytest: "Used to test Get It Done backend routes and data structure behavior.",
  "CLI tools": "Forge brings environment, package, file, and application operations into a Python CLI.",
  pathlib: "Used by Forge for file and path operations.",
  subprocess: "Used by Forge to run system and application operations.",
  venv: "Used by Forge to manage Python virtual environments.",
  JSON: "Used by Forge for local application and executable data.",
  JavaScript: "Used in frontend development and interactive web interfaces.",
  React: "Used in this portfolio's interactive interface.",
  Nextjs: "Used to build this portfolio's pages and routes.",
  TypeScript: "Used for the portfolio's React components and route data.",
  "Tailwind CSS": "Used to style this responsive portfolio.",
  HTML: "Used to structure this portfolio's pages.",
  CSS: "Used for this portfolio's layout, responsive styling, and visual details.",
  "Unit testing": "pytest tests are included for the backend and data structures package.",
  "Edge-case testing": "Get It Done and the data structures package include tests for invalid input and boundary behavior.",
  "Database modeling": "SQLAlchemy models define users, posts, capabilities, follows, and tasks in Get It Done.",
  "Data Structures & Algorithms": "Practiced through from-scratch stack, queue, linked-list, and binary-search-tree implementations.",
  "Git": "Used for source control across project work.",
  GitHub: "Project source and portfolio code are available through the linked repositories.",
  "VS Code": "Used while developing this portfolio and project work.",
  Firebase: "Used with authentication/storage in the Unified Mentor internship projects.",
};
