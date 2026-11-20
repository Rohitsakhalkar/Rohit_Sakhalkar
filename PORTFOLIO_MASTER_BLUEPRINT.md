# Rohit Sakhalkar Portfolio — Master Blueprint

## 1. Purpose
Create a distinctive, responsive personal developer portfolio that communicates Rohit's engineering journey, projects, practical skills, open-source contributions, and openness to early-career opportunities. It should feel personal and thoughtfully crafted, not like a generic template.

## 2. Identity
- Name: Rohit Sakhalkar
- Primary positioning: Developer focused on Python, automation, backend engineering, and building practical software.
- Exact signature: **Built by Sakhalkar, in search of meaning.**
- The signature belongs in the footer. It may appear subtly in selected places, but avoid repeating it everywhere.

## 3. Hero copy (locked)
**ROHIT SAKHALKAR / DEVELOPER**

**Still figuring things out.**  
**Still building anyway.**

I build software, experiment with ideas, and automate the boring stuff.  
Most of my projects start with a question: What if I built this myself?

Metadata: `PYTHON · AUTOMATION · BACKEND · BUILDING`

Actions:
- EXPLORE MY WORK
- VIEW GITHUB

## 4. Design direction
### Concept
A personal digital workspace, but not a literal fake operating system or desktop. Blend a cinematic editorial hero with practical, workspace-like sections.

### Visual balance
- 70% editorial
- 20% creative developer
- 10% product UI

### Palette
- Background: `#151515`
- Surface: `#202020`
- Primary text: `#F1EFEA`
- Secondary text: `#9B9B9B`
- Border: `#333333`
- Accent: `#FF784F`

### Typography
- Headings: Space Grotesk
- Body/UI: Geist
- Technical labels: JetBrains Mono

### Style rules
Use large typography, asymmetry, deliberate whitespace, thin separators, restrained orange accents, custom graphics, and subtle texture/grid only where useful.
Avoid generic AI-generated portfolio aesthetics, stock developer photos, fake dashboards, meaningless UI decorations, excessive gradients, glassmorphism, skill bars, unnecessary terminal styling, excessive rounded cards, and motion for motion's sake.

## 5. Motion and accessibility
- Smooth, professional baseline with a few memorable interactions.
- Hero text reveal, restrained hero-art motion, project-card interaction, timeline reveal, and expandable contribution details are acceptable.
- No essential content or action may depend on animation or hover.
- Respect `prefers-reduced-motion`.
- Keyboard accessible; visible focus states; semantic HTML; sufficient contrast.

## 6. Responsive requirements
Mobile is a first-class design target, not desktop squeezed down.
- No horizontal overflow.
- Touch targets at least 44px where practical.
- No hover-only interactions.
- Compact hero, responsive project layouts, readable type, accessible mobile navigation.
- Reduced/lighter motion and optimized images on mobile.
- Test at narrow mobile, tablet, laptop, and wide desktop widths.

## 7. Homepage architecture
Homepage `/` sections, in this order:
1. Navigation
2. Hero
3. Currently Building
4. Featured Project: Get It Done
5. Selected Projects
6. Contributions
7. Developer Journey
8. About
9. Contact
10. Footer

### Navigation
Brand: `ROHIT SAKHALKAR`
Links: `HOME · PROJECTS · CONTRIBUTIONS · ABOUT · CONTACT`
Resume link accessible.
Slim sticky/fixed navigation. Initially transparent; becomes subtly solid after scroll. Mobile menu must be accessible and close after navigation.

### Currently Building widget
- GET IT DONE
- IN DEVELOPMENT
- Current focus: Backend development · FastAPI
- Supporting line: Completing core backend functionality before beginning frontend development.
- Keep this small, honest, and workspace-like. Never imply fake live metrics.

### Featured project
Get It Done receives the largest showcase treatment because it is the primary ongoing project.

### Selected projects
1. Get It Done
2. Forge
3. Data Structures
4. LearnAble

Other small projects may be listed in an “Other things I've built” subsection if useful. Do not duplicate featured projects unnecessarily.

## 8. Project routes
- `/projects` — full collection
- `/projects/get-it-done`
- `/projects/forge`
- `/projects/data-structures`
- `/projects/learnable`

Each case study should have:
- Hero/title and status
- Overview
- Problem or motivation
- Approach
- Architecture/technical decisions where relevant
- Implemented features
- Challenges
- Lessons learned
- Future improvements
- GitHub link and live demo only when real and available

Clearly distinguish implemented, in-progress, planned, and unverified features. Never invent screenshots, usage metrics, deployment status, users, or functionality.

## 9. Project content

### Get It Done
**Role:** Solo project / backend developer  
**Status:** In development; backend-first

Description:  
A social task platform designed to connect people through local opportunities and skills. The project explores a regional platform for people to discover, post, and complete small tasks while building a social layer around skills and community.

Current backend stack: Python, FastAPI, SQLAlchemy, SQLite, Pydantic, pytest, JWT.

Verified backend areas include:
- User registration, login, profiles, and search
- Password hashing and JWT authentication
- Posts: create, view, update, delete, and user posts
- Capabilities/skills management
- Follow/unfollow and follower/following data
- Task creation, retrieval, updating, and discovery
- Database constraints, exception handling, transaction rollback
- Pagination on several list/search endpoints
- Isolated SQLite test setup and dependency overrides

Architecture:
- Modular FastAPI backend
- SQLAlchemy models and repository modules
- Pydantic schemas
- SQLite development database
- pytest tests

Current focus: Finish core backend functions before selecting/building the frontend.

Planned/not yet confirmed complete:
- Full task assignment and lifecycle transitions
- Mutual cancellation flow
- Messaging
- Notifications
- Moderation/reporting
- Frontend
- Production deployment

Do not present planned functionality as implemented.

Suggested case-study narrative: building a real product backend, designing its data and API boundaries, authentication, social/task concepts, test isolation, and handling edge cases while evolving the architecture.

### Forge
**Status:** Completed · V1  
**Type:** Python CLI automation toolkit

Description:  
A command-line automation toolkit for development and everyday system operations. Forge started as a Python environment manager and expanded into a modular CLI for file operations, application launching, executable discovery, and task history.

Implemented features:
- Python environment creation and management
- Package install/uninstall/upgrade operations
- Running Python scripts
- File and directory utilities
- Application registration, listing, and launching
- Executable scanning and path resolution
- JSON-backed app, executable, and task-history persistence

Stack: Python, pathlib, subprocess, venv, JSON, setuptools/pyproject.

Honest framing: experimental toolkit, V1 completed. Do not claim production-grade reliability. Potential cleanup/refinement areas may be described as future improvements, not hidden or exaggerated.

### Data Structures
**Type:** Python package

Description:  
A Python package implementing fundamental data structures from scratch. Built to explore node-based storage, OOP, recursion, iteration, and the internal mechanics of common structures, with pytest coverage for core operations and edge cases.

Implemented structures:
- Stack
- Queue
- Singly Linked List
- Doubly Linked List
- Binary Search Tree

Technical themes:
- Node-based implementations
- Iteration and Python special methods
- Index-based linked-list operations
- BST insertion, search, deletion, and traversals
- Testing and packaging

Stack: Python, OOP, pytest, setuptools.

### LearnAble
**Role:** Solo Developer  
**Status:** Prototype · Final Semester Project

Subtitle: An accessible e-learning platform built around different ways of learning and interacting.

Description:  
LearnAble is an e-learning platform prototype designed to make digital learning more accessible by offering different interaction experiences. Instead of forcing everyone into a single interface, it provides voice assistance, visual adjustments, simplified navigation, and a standard learning experience. Built independently as a final-semester project, it combines frontend development, authentication, learning functionality, accessibility features, and integrations.

Accessibility modes:
- Voice-Assisted: speech recognition, spoken responses, navigation commands, contextual commands
- Visual: adjustable zoom, font weight, theme/contrast options, and color-vision filters
- Simplified: streamlined interface intended to reduce complexity
- Standard: conventional learning experience

Verified functionality areas:
- Authentication
- Accessibility preference selection and persistence
- Courses and lessons
- Learning progress and video progress
- Quizzes and scores
- Analytics
- User settings/profile
- Voice navigation and commands
- Speech feedback
- Optional AI response integration through configured n8n webhook

Stack: Next.js, React, TypeScript, Tailwind CSS, Firebase, Web Speech API, n8n.

Honest framing: prototype, not production-ready. Do not claim all integrations/features have been live-tested or deployed. Future improvements can include end-to-end tests across modes, browser compatibility and voice reliability, accessibility validation, error handling, security-rule review, and deployment.

## 10. Contributions
Section label/title: **Outside My Repositories**
Intro:  
I enjoy contributing beyond my own projects, exploring unfamiliar codebases, understanding existing engineering decisions, and submitting focused improvements.

### Contribution 1 — HuRI Modules
Repository: Lucy-Robotics/huri-modules  
PR #53: `fix(rag): import qdrant client lazily`  
Status: **Merged**

Summary:
Refactored Qdrant imports so they load only when required instead of at module import time. Updated lazy-import test coverage and type-checking imports/forward references. Addressed maintainer feedback before approval.

Technical highlights:
- Lazy dependency imports
- `TYPE_CHECKING` and forward references
- Test updates
- Responding to review feedback

PR: https://github.com/Lucy-Robotics/huri-modules/pull/53

### Contribution 2 — NSE Trader Skill
Repository: ogmanojdev/nse-trader-skill  
PR #14: `fix(test): ignore root dotfiles`  
Status: **Open**

Summary:
Improved a root directory structure test by filtering unwanted dotfiles while preserving `.claude-plugin` as an expected entry. Added a regression test.

Technical highlights:
- Test robustness
- Directory filtering
- Regression testing

PR: https://github.com/ogmanojdev/nse-trader-skill/pull/14

Statuses must remain accurate and may be refreshed from GitHub. Never imply an open PR is merged.

## 11. Developer Journey
Milestones, with dates to be verified before publishing:
- The Beginning — learning programming fundamentals
- Learning by Building — early projects and experimentation
- Building Tools — Forge
- Building for People — LearnAble
- Open-source contributions
- Building Something Bigger — Get It Done
- The Next Chapter

Desktop: subtle alternating timeline. Mobile: vertical timeline. Interactions reveal more detail but do not hide essential information. Use only verified dates and milestones.

## 12. About
Keep concise, personal, and honest. Avoid corporate biography language.

Draft:
> I'm a BCA graduate who got into programming because I was curious about what happens behind the things we use every day. That curiosity eventually turned into building my own projects, exploring automation, working with Python, and trying to solve problems instead of just learning how to write code. I enjoy having an idea and figuring out how to turn it into something functional. Sometimes that means building a tool, sometimes a web application, sometimes spending hours trying to understand why something broke. I'm still growing as a developer, and I see that as part of the process. I'm interested in opportunities where I can learn from real engineering work, contribute meaningfully, and keep building.

Possible subsections:
- My Journey
- What I Enjoy Building
- How I Work
- Currently

Avoid a long biography.

## 13. Contact
CTA:
**Have something worth building?**  
I'm looking for opportunities to learn, contribute, and work on real software.

Include real links only:
- Email
- LinkedIn
- GitHub
- Resume
- Contact form

Open-to-opportunities indicator:
`● OPEN TO INTERNSHIPS & ENTRY-LEVEL ROLES`

Contact form may use Web3Forms or another lightweight provider selected during implementation. Protect against spam and show success/error states. Never hard-code private credentials in client code.

## 14. Footer
ROHIT SAKHALKAR  
Built by Sakhalkar, in search of meaning.  
© 2026 · Crafted with curiosity.  
GITHUB · LINKEDIN · EMAIL

## 15. Tech stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Motion (motion.dev) for carefully selected motion
- shadcn/ui selectively, not as the visual identity
- Lucide icons
- GitHub API for public repository/PR information where useful
- Contact provider selected during implementation
- Vercel deployment
- Next/Image for image optimization

Avoid adding backend, database, authentication, global state, or dependencies without a clear need.

## 16. Architecture direction
Keep project data in typed data files. Use individual routes for case studies. Keep components organized by section/domain. Use server components by default; client components only for interaction. GitHub integration must not control the availability of the portfolio; provide graceful fallbacks and cache requests appropriately.

Suggested structure:
```text
rohit-portfolio/
├── app/
│   ├── page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   ├── get-it-done/
│   │   ├── forge/
│   │   ├── data-structures/
│   │   └── learnable/
│   ├── contributions/
│   ├── about/
│   └── contact/
├── components/
│   ├── layout/
│   ├── hero/
│   ├── projects/
│   ├── contributions/
│   ├── journey/
│   ├── about/
│   └── contact/
├── data/
│   ├── projects.ts
│   ├── journey.ts
│   └── contributions.ts
├── lib/
│   ├── github.ts
│   └── utils.ts
└── public/
    ├── images/
    ├── projects/
    └── resume.pdf
```

Adapt the structure when implementation needs justify it; do not create empty abstractions just to match this tree.

## 17. Build stages
1. Foundation: create app, dependencies, lint/type-check, base layout, metadata, fonts, global tokens.
2. Design system: typography, spacing, colors, containers, buttons, links, separators, responsive utilities.
3. Navigation and Hero: implement and review desktop/mobile.
4. Homepage sections: Currently Building, Featured project, Selected projects.
5. Contributions section and route.
6. Developer Journey and About.
7. Project index and case-study routes.
8. Contact and footer.
9. Mobile refinement across all pages.
10. Accessibility, SEO, performance, error/fallback states, tests.
11. Deploy and final polish.

Build each stage, run it, inspect it, and refine before moving on. Do not attempt the whole site in one generation.

## 18. Development workflow
Environment: VS Code + Codex.
- Codex reads `AGENTS.md` before work.
- Work in focused tasks.
- After each stage: run the app, inspect visually, check console/terminal, lint, and type-check.
- Make commits at meaningful checkpoints.
- Use real project links and verified content.
- Ask before making major design or architecture changes.

## 19. Quality bar / acceptance checklist
- Responsive from small mobile through wide desktop
- No horizontal overflow
- Keyboard accessible navigation and controls
- Visible focus indicators
- Reduced-motion support
- Appropriate semantic HTML
- Accurate project facts and statuses
- No fabricated metrics, screenshots, users, deployment, or PR status
- Graceful GitHub/API/contact failure states
- SEO metadata and sensible page titles
- Optimized images and fonts
- Fast initial page load
- No unnecessary packages
- No broken links
- Lint and type-check pass
- Build succeeds

## 20. Final principle
This portfolio should feel like Rohit's work and journey: curious, imperfect, practical, experimental, and steadily becoming better. The design should support the content, not overpower it. The site should be memorable because it has a clear voice and real engineering work—not because it contains visual noise.
