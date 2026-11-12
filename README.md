# ROHIT.EXE

An interactive, game-inspired portfolio world for Rohit Sakhalkar. The visual
navigation gives each part of the portfolio its own location while keeping
projects, experience, skills, education, and contact information available as
regular, crawlable pages.

## World locations

- **Project District** — project cards, filters, source links, and project
  dossiers with implementation status.
- **Engineering Lab** — interactive skill modules linked to relevant work.
- **Career Archives** — verified internship and separately labeled
  project-based work.
- **Knowledge Vault** — education and engineering interests.
- **Communication Hub** — direct contact links and the EmailJS message flow.
- **Spawn Point** — profile, project entry point, and the world map.

The simulated developer console is available from every page. It accepts
portfolio commands only and never executes operating-system commands.

## Tech stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- EmailJS Browser SDK

No new animation or 3D dependencies are required; the environment effects use
CSS and respect reduced-motion preferences.

## Project structure

```text
src/
  app/                 Spawn point, world locations, project dossiers, metadata
  components/          World navigation, project cards, console, contact form
  lib/data.ts          Portfolio content, projects, and world locations
public/                Static assets and the ROHIT.EXE mark
```

## Requirements

- Node.js compatible with the installed Next.js version.
- npm.

Install dependencies:

```bash
npm ci
```

## Configure EmailJS

Create an EmailJS service and template. Add the public service ID, template ID,
and public key to a `.env.local` file in the project root:

```dotenv
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

After confirming the actual deployment domain, also set:

```dotenv
NEXT_PUBLIC_SITE_URL=https://your-actual-domain
```

This value is used as the metadata base for absolute social-sharing image URLs.
It is intentionally not guessed or defaulted to `rohit.dev`.

Configure these template parameters: `from_name`, `from_email`, `subject`,
`message`, and `to_email`. Restrict allowed origins and configure sending
controls in the EmailJS dashboard. Public client-side keys are intended to be
used by the browser; do not commit `.env.local` or private service credentials.

Without these environment variables, the contact form reports that it is
unconfigured and provides a direct email link.

## Development and validation

```bash
npm run dev
npm run lint
npx tsc --noEmit
npm run build
npm run start
```

The development server is available at [http://localhost:3000](http://localhost:3000).

## Deployment

Deploy to a Node.js host that supports Next.js. Add the EmailJS variables to the
host environment and allowlist the production origin in EmailJS. No production
domain is assumed in the metadata.
