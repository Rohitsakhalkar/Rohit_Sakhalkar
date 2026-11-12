// ─── PERSONAL DATA ────────────────────────────────────────────────────────────
// Edit this file to update every page of the portfolio at once.

export const personal = {
  name: "Rohit Sakhalkar",
  title: "Python Developer",
  email: "rohitsakhalkar3@gmail.com",
  github: "https://github.com/Rohitsakhalkar",
  linkedin: "https://linkedin.com/in/rohitsakhalkar", // update if different
  location: "India",
  summary:
    "Python developer focused on building clean, purposeful software. I write backend systems, automate things that shouldn't be manual, and occasionally make UIs that don't hurt to look at.",
};

// ─── TERMINAL BOOT LINES ───────────────────────────────────────────────────────
export const bootLines = [
  "> Initializing rohit.dev...",
  "> Loading Rohit Sakhalkar — Python Developer",
  "> He builds backends. Automates the boring stuff.",
  "> Knows his way around React when the situation demands.",
  `> Currently: open to work. Location: India.`,
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
    "Python developer. Backend-first. Writes clean code, ships things.",
    "Built task managers, forges, and data-structure visualisers.",
    "Currently looking for the next interesting problem to solve.",
  ],
  skills: [
    "─── Languages ───",
    "  Python · JavaScript · TypeScript",
    "─── Backend ─────",
    "  Node.js · Express · REST APIs",
    "─── Frontend ────",
    "  React · Next.js · Tailwind CSS",
    "─── Data ────────",
    "  SQL · PostgreSQL · Data Structures & Algorithms",
    "─── Tools ───────",
    "  Git · GitHub · VS Code",
  ],
  experience: [
    "Work history is under wraps for now.",
    "Reach out at rohitsakhalkar3@gmail.com for details.",
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
      "A no-nonsense task manager. Add tasks, mark them done, move on. Built to stay out of your way.",
    tags: ["Python", "Task Management"],
    github: "https://github.com/Rohitsakhalkar/get_it_done",
    live: "",
    featured: true,
    terminalPreview: [
      "$ python main.py",
      "> [+] Add task: 'Ship portfolio'",
      "> [✓] Task added.",
      "> [1] Ship portfolio — PENDING",
    ],
  },
  {
    id: "forge",
    title: "Forge",
    description:
      "A project scaffolding tool. Describe what you want to build, Forge sets up the boilerplate.",
    tags: ["Python", "CLI", "Automation"],
    github: "https://github.com/Rohitsakhalkar/forge",
    live: "",
    featured: true,
    terminalPreview: [
      "$ forge new my-api --template fastapi",
      "> Creating project structure...",
      "> Installing dependencies...",
      "> Done. cd my-api && forge run",
    ],
  },
  {
    id: "datastructure",
    title: "Data Structures",
    description:
      "Visual and runnable implementations of classic data structures. Good for learning, better for reference.",
    tags: ["Python", "Algorithms", "DSA"],
    github: "https://github.com/Rohitsakhalkar/datastructure",
    live: "",
    featured: false,
    terminalPreview: [
      "$ python bst.py",
      "> Inserting: 5, 3, 7, 1, 4",
      ">     5",
      ">    / \\",
      ">   3   7",
    ],
  },
];

// ─── SKILLS ───────────────────────────────────────────────────────────────────
export const skills = [
  { name: "Python", category: "Language", level: 90 },
  { name: "JavaScript", category: "Language", level: 75 },
  { name: "TypeScript", category: "Language", level: 65 },
  { name: "React", category: "Frontend", level: 70 },
  { name: "Next.js", category: "Frontend", level: 65 },
  { name: "Tailwind CSS", category: "Frontend", level: 75 },
  { name: "Node.js", category: "Backend", level: 70 },
  { name: "REST APIs", category: "Backend", level: 80 },
  { name: "SQL / PostgreSQL", category: "Data", level: 70 },
  { name: "DSA", category: "CS", level: 75 },
  { name: "Git", category: "Tools", level: 80 },
  { name: "CLI Tools", category: "Tools", level: 85 },
];

// ─── TIMELINE (git log style) ──────────────────────────────────────────────────
export const timeline = [
  {
    hash: "a1b2c3d",
    date: "2026",
    message: "Built portfolio — you're looking at it",
    detail: "Next.js 14, TypeScript, Tailwind, EmailJS",
  },
  {
    hash: "d4e5f6a",
    date: "2026",
    message: "Shipped Forge — project scaffolding CLI",
    detail: "Python CLI tool for rapid project setup",
  },
  {
    hash: "b7c8d9e",
    date: "2025",
    message: "Built Get It Done — task manager",
    detail: "Clean Python task management CLI",
  },
  {
    hash: "e1f2a3b",
    date: "2025",
    message: "DSA visualiser — data structures in Python",
    detail: "Runnable, visual implementations",
  },
  {
    hash: "f4a5b6c",
    date: "2024",
    message: "Started Python seriously",
    detail: "Backend systems, scripting, automation",
  },
];
