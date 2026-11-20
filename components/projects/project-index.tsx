import { projects } from "../../data/projects";
import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { Section } from "../ui/section";
import { ProjectIndexArtwork } from "./project-artwork";

export function ProjectIndex() {
  return (
    <main className="projects-page">
      <Section className="projects-index" aria-labelledby="projects-index-title">
        <Container wide>
          <div className="projects-index__intro">
            <p className="technical-label">PROJECT ARCHIVE</p>
            <div>
              <h1 id="projects-index-title">Things I&apos;ve built. Things I&apos;m building.</h1>
              <p>
                A collection of experiments, tools, and applications built while exploring software development, automation, backend engineering, and ideas that seemed worth turning into something real.
              </p>
            </div>
          </div>

          <div className="projects-index__list">
            {projects.map((project) => (
              <article className={`project-row project-row--${project.visual}`} key={project.slug}>
                <p className="project-row__number" aria-hidden="true">{project.number}</p>
                <div className="project-row__copy">
                  <p className="technical-label">{project.eyebrow}</p>
                  <h2>{project.title}</h2>
                  <p className="project-row__description">{project.subtitle}</p>
                  <p className="project-row__status">{project.status}</p>
                  <p className="technical-label project-row__stack">{project.stack}</p>
                  <Button href={`/projects/${project.slug}`} variant={project.slug === "get-it-done" ? "primary" : "secondary"}>VIEW CASE STUDY</Button>
                </div>
                <ProjectIndexArtwork variant={project.visual} />
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
