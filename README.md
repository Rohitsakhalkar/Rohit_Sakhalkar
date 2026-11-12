# ROHIT.EXE — Portfolio

A responsive portfolio for Rohit Sakhalkar, with restrained ROHIT.EXE branding
and game-inspired visual details. Projects, skills, experience, education, and
contact remain straightforward, accessible pages.

## Portfolio

- **Projects** — four curated projects lead in a fixed order, followed by
  public repositories fetched from GitHub. Search, technology, category, and
  status filters work together with sorting. The GitHub catalog is cached for
  one hour; if GitHub is unavailable, the curated projects remain available.
- **Skills** — technologies are grouped and linked to relevant project work;
  no proficiency scores are implied.
- **Experience** — internship experience is kept separate from project-based
  work.
- **About** — background, education, and engineering interests.
- **Contact** — direct links and an EmailJS message form.

The simulated developer console accepts portfolio commands only and never
executes operating-system commands.

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
  app/                 Portfolio pages, project details, and metadata
  components/          Navigation, project catalog, console, and contact form
  lib/                 Curated content, GitHub catalog, and shared types
public/                Static assets and the ROHIT.EXE mark
tests/                 Project catalog tests
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
npm run test:projects
npm run build
npm run start
```

The development server is available at [http://localhost:3000](http://localhost:3000).

## Deployment

Deploy to a Node.js host that supports Next.js. Add the EmailJS variables to the
host environment and allowlist the production origin in EmailJS. No production
domain is assumed in the metadata.
