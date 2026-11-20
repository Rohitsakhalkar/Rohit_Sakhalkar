import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { Section } from "../ui/section";
import { StatusIndicator } from "../ui/status-indicator";

const engineeringHighlights = [
  {
    title: "Authentication and security",
    description: "Registration, password hashing, and JWT authentication.",
  },
  {
    title: "Profiles and discovery",
    description: "User profiles, search, and capabilities management.",
  },
  {
    title: "Social functionality",
    description: "Follow and unfollow actions with follower and following lists.",
  },
  {
    title: "Task foundations",
    description: "Task creation, retrieval, and location-related discovery filtering.",
  },
  {
    title: "Data and testing",
    description: "SQLAlchemy models, repositories, Pydantic schemas, and automated tests.",
  },
] as const;

function ProjectRelationshipDiagram() {
  return (
    <div className="featured-project__diagram" aria-hidden="true">
      <svg
        className="featured-project__diagram-svg"
        viewBox="0 0 620 470"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M112 112H508M112 112V358M508 112V358M112 358H508" stroke="currentColor" strokeOpacity="0.45" />
        <path d="M112 112L310 235L508 112M112 358L310 235L508 358" stroke="#FF784F" strokeOpacity="0.75" strokeWidth="2" />
        <path d="M310 235V112M310 235V358" stroke="currentColor" strokeOpacity="0.35" />

        <rect x="48" y="48" width="128" height="64" fill="#202020" stroke="currentColor" />
        <rect x="246" y="203" width="128" height="64" fill="#202020" stroke="#FF784F" />
        <rect x="444" y="48" width="128" height="64" fill="#202020" stroke="currentColor" />
        <rect x="48" y="358" width="128" height="64" fill="#202020" stroke="currentColor" />
        <rect x="444" y="358" width="128" height="64" fill="#202020" stroke="currentColor" />

        <circle cx="112" cy="112" r="5" fill="#FF784F" />
        <circle cx="310" cy="235" r="7" fill="#FF784F" />
        <circle cx="508" cy="112" r="5" fill="#FF784F" />
        <circle cx="112" cy="358" r="5" fill="#F1EFEA" />
        <circle cx="508" cy="358" r="5" fill="#F1EFEA" />

        <path d="M72 78H152M270 233H350M468 78H548M72 388H152M468 388H548" stroke="currentColor" strokeOpacity="0.65" />
        <path d="M80 92H128M278 247H342M476 92H524M80 402H128M476 402H524" stroke="#FF784F" strokeOpacity="0.55" />
      </svg>
      <div className="featured-project__diagram-label featured-project__diagram-label--people">PEOPLE</div>
      <div className="featured-project__diagram-label featured-project__diagram-label--skills">SKILLS</div>
      <div className="featured-project__diagram-label featured-project__diagram-label--posts">POSTS</div>
      <div className="featured-project__diagram-label featured-project__diagram-label--tasks">TASKS</div>
      <div className="featured-project__diagram-label featured-project__diagram-label--core">CORE</div>
    </div>
  );
}

export function FeaturedProject() {
  return (
    <Section
      aria-labelledby="featured-project-heading"
      className="featured-project"
      id="featured-project"
    >
      <Container wide>
        <div className="featured-project__header">
          <p className="featured-project__eyebrow">FEATURED PROJECT / 01</p>
          <StatusIndicator>IN DEVELOPMENT</StatusIndicator>
        </div>

        <div className="featured-project__intro">
          <div className="featured-project__title-block">
            <h2 id="featured-project-heading">Get It Done</h2>
            <p className="featured-project__description">
              A platform designed to connect people through local opportunities, skills, and small tasks.
            </p>
          </div>

          <ProjectRelationshipDiagram />
        </div>

        <div className="featured-project__body">
          <div className="featured-project__narrative">
            <p>
              I am building Get It Done as a platform where people can discover opportunities, share their skills, and connect around work that needs to be done.
            </p>
            <p>
              The project is currently being developed backend-first, with a focus on building reliable core functionality before starting the frontend.
            </p>

            <div className="featured-project__actions">
              <Button href="/projects/get-it-done">VIEW PROJECT</Button>
              <Button
                href="https://github.com/Rohitsakhalkar/get_it_done"
                rel="noreferrer"
                target="_blank"
                variant="secondary"
              >
                VIEW SOURCE
              </Button>
            </div>
          </div>

          <div className="featured-project__details">
            <div>
              <p className="featured-project__label">TECHNICAL STACK</p>
              <p className="featured-project__metadata">PYTHON · FASTAPI · SQLALCHEMY · SQLITE · PYTEST</p>
            </div>
            <div>
              <p className="featured-project__label">CURRENT FOCUS</p>
              <p className="featured-project__metadata">BACKEND DEVELOPMENT</p>
            </div>
          </div>
        </div>

        <div className="featured-project__highlights">
          <p className="featured-project__label">ENGINEERING HIGHLIGHTS</p>
          <div className="featured-project__highlight-list">
            {engineeringHighlights.map((highlight) => (
              <article className="featured-project__highlight" key={highlight.title}>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
