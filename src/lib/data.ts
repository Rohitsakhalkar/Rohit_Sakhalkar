// ─── PERSONAL DATA ────────────────────────────────────────────────────────────
// Edit this file to update every page of the portfolio at once.

export const personal = {
  name: "Rohit Sakhalkar",
  title: "Python Developer | Backend & Automation",
  email: "rohitsakhalkar3@gmail.com",
  github: "https://github.com/Rohitsakhalkar",
  linkedin: "https://linkedin.com/in/rohitsakhalkar9347",
  location: "Belagavi, Karnataka, India",
  summary:
    "Python developer focused on building scalable backends, clean APIs, and automation tools. Building social & freelancing platforms with FastAPI and streamlining developer workflows.",
};

// ─── TERMINAL BOOT LINES ───────────────────────────────────────────────────────
export const bootLines = [
  "> Initializing rohit.dev...",
  "> Loading Rohit Sakhalkar — Python Developer",
  "> Backend development: FastAPI, REST APIs, SQL.",
  "> Automates system workflows and dev environments.",
  `> Currently: open to work. Location: Karnataka, India.`,
  "> Type `help` to see what this thing can do.",
];

// ─── TERMINAL COMMANDS ─────────────────────────────────────────────────────────
export const commands: Record<string, string | string[]> = {
  help: [
    "Available commands:",
    "  whoami      → who is Rohit",
    "  skills      → tech stack",
    "  projects    → things he built",
    "  experience  → work history",
    "  contact     → reach out",
    "  github      → open GitHub",
    "  clear       → clear terminal",
  ],
  whoami: [
    "Rohit Sakhalkar.",
    "Python developer. Backend-first. Writes clean APIs, automation tools, and tests.",
    "Building Get It Done — a social + freelancing platform. Also: Forge, DSA tools.",
    "Currently looking for an entry-level Python Developer or Backend role.",
  ],
  skills: [
    "─── Languages ───",
    "  Python · SQL · JavaScript · C · C#",
    "─── Backend ─────",
    "  FastAPI · REST APIs · SQLAlchemy",
    "─── Frontend ────",
    "  React · Next.js · Tailwind CSS",
    "─── Core CS & Data ──",
    "  Data Structures & Algorithms · PostgreSQL · SQLite",
    "─── Automation & Tools ─",
    "  Git · GitHub · subprocess · Linux · pytest",
  ],
  experience: [
    "Frontend Developer Intern @ Unified Mentor (May–July 2025)",
    "  • Built Hawks Music Player & EBus Management System",
    "  • Integrated Firebase Auth/Storage & Google Maps API",
    "Reach out at rohitsakhalkar3@gmail.com for full resume & details.",
  ],
  contact: ["→ Navigating to /contact..."],
  github: ["→ Opening GitHub in a new tab..."],
  projects: ["→ Navigating to /projects..."],
  clear: [],
};

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: "get_it_done",
    title: "Get It Done",
    description:
      "An in-progress social and freelancing platform bridging community interaction with real gigs — from getting help on writing assignments to finding a technical co-founder.",
    tags: ["Python", "FastAPI", "SQLAlchemy", "REST APIs", "pytest"],
    github: "https://github.com/Rohitsakhalkar/get_it_done",
    live: "",
    featured: true,
    terminalPreview: [
      "$ uvicorn app.main:app --reload",
      "> [GET] /api/v1/feed — 200 OK",
      "> [POST] /api/v1/gigs — 'Looking for co-founder'",
      "> [✓] Matched: social & task capability coordination live",
    ],
  },
  {
    id: "forge",
    title: "Forge",
    description:
      "A modular Python CLI automation toolkit for managing development environments, executing package operations, launching apps via single commands, and streamlining file management.",
    tags: ["Python", "CLI", "subprocess", "Automation"],
    github: "https://github.com/Rohitsakhalkar/forge",
    live: "",
    featured: true,
    terminalPreview: [
      "$ forge env create --name dev-env",
      "> [✓] Virtual environment initialized",
      "$ forge launch --app code --project api",
      "> [✓] File utilities & operations history updated",
    ],
  },
  {
    id: "datastructure",
    title: "Data Structures Package",
    description:
      "From-scratch implementations of fundamental data structures with pytest coverage for edge cases, traversal operations, and boundary conditions.",
    tags: ["Python", "DSA", "pytest", "Algorithms"],
    github: "https://github.com/Rohitsakhalkar/datastructure",
    live: "",
    featured: false,
    terminalPreview: [
      "$ pytest tests/test_bst.py",
      "> test_insertion PASSED [ 33% ]",
      "> test_deletion PASSED  [ 66% ]",
      "> test_traversal PASSED [ 100% ]",
    ],
  },
];

// ─── SKILLS ───────────────────────────────────────────────────────────────────
export const skills = [
  { name: "Python", category: "Language", level: 90 },
  { name: "SQL", category: "Language", level: 75 },
  { name: "JavaScript", category: "Language", level: 70 },
  { name: "FastAPI", category: "Backend", level: 85 },
  { name: "REST APIs", category: "Backend", level: 85 },
  { name: "SQLAlchemy", category: "Backend", level: 75 },
  { name: "React", category: "Frontend", level: 70 },
  { name: "Next.js", category: "Frontend", level: 65 },
  { name: "Tailwind CSS", category: "Frontend", level: 75 },
  { name: "DSA", category: "CS", level: 55 },
  { name: "pytest", category: "Testing", level: 80 },
  { name: "Git & GitHub", category: "Tools", level: 85 },
  { name: "CLI & Automation", category: "Tools", level: 85 },
];

// ─── TIMELINE (git log style) ──────────────────────────────────────────────────
export const timeline = [
  {
    hash: "a1b2c3d",
    date: "2026",
    message: "Built portfolio — interactive terminal & AI chat",
    detail: "Next.js 14, TypeScript, Tailwind, EmailJS",
  },
  {
    hash: "d4e5f6a",
    date: "2026",
    message: "Shipped Forge — Python automation CLI toolkit",
    detail: "Virtual environments, app launcher, and file operations",
  },
  {
    hash: "b7c8d9e",
    date: "2025",
    message: "Building Get It Done — social & freelancing platform",
    detail: "FastAPI backend for social feeds, gigs, and finding co-founders",
  },
  {
    hash: "e1f2a3b",
    date: "2025",
    message: "Data Structures Package — Python & pytest",
    detail: "Scratch implementations of linked lists, BST, queues, and stacks",
  },
  {
    hash: "f4a5b6c",
    date: "2025",
    message: "Frontend Developer Intern @ Unified Mentor",
    detail: "Hawks Music Player & EBus Management System with Firebase",
  },
];
