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
    "  about       → about and education",
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
    "About: A developer in the making, with a dream to become someone who turns ideas into meaningful products, solves real-world problems, and never stops learning.",
  ],
  education: [
    "Bachelor of Computer Applications (BCA)",
    "KLS Gogte College of Commerce · Rani Channamma University · CGPA 8.1",
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
    name: "Projects",
    label: "Projects",
    path: "/projects",
    description: "Explore the software and tools I’ve been building.",
    coordinates: "01 / 05",
  },
  {
    id: "02",
    name: "Skills",
    label: "Skills",
    path: "/skills",
    description: "Browse the technologies behind my project work.",
    coordinates: "02 / 05",
  },
  {
    id: "03",
    name: "Experience",
    label: "Experience",
    path: "/experience",
    description: "See my internship and project-based experience.",
    coordinates: "03 / 05",
  },
  {
    id: "04",
    name: "Education",
    label: "Education",
    path: "/about",
    description: "Learn about my background, education, and approach.",
    coordinates: "04 / 05",
  },
  {
    id: "05",
    name: "Contact",
    label: "Contact",
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
  "Next.js": "Used to build this portfolio's pages and routes.",
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
