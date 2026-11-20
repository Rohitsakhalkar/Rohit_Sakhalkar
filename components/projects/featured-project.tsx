import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { Section } from "../ui/section";
import { StatusIndicator } from "../ui/status-indicator";
import { HomepageGetItDoneArtwork } from "./project-artwork";

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

          <HomepageGetItDoneArtwork />
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
