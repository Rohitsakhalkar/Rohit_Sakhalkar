import { projects, type Project } from "../../data/projects";
import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { ProjectArtwork } from "./project-artwork";

type ProjectCaseStudyProps = {
  project: Project;
};

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[projectIndex - 1];
  const next = projects[projectIndex + 1];

  return (
    <main className={`case-study case-study--${project.visual}`}>
      <section className="case-study__hero" aria-labelledby="case-study-title">
        <Container wide>
          <div className="case-study__hero-meta">
            <p className="technical-label">{project.eyebrow}</p>
            <p className="case-study__number">{project.number} / 04</p>
          </div>
          <div className="case-study__hero-grid">
            <div>
              <h1 id="case-study-title">{project.title}</h1>
              <p className="case-study__subtitle">{project.subtitle}</p>
            </div>
            <ProjectArtwork variant={project.visual} />
          </div>
          <div className="case-study__facts">
            <div><p className="technical-label">STATUS</p><p>{project.status}</p></div>
            {project.role ? <div><p className="technical-label">ROLE</p><p>{project.role}</p></div> : null}
            <div><p className="technical-label">STACK</p><p>{project.stack}</p></div>
          </div>
        </Container>
      </section>

      <section className="case-study__overview" aria-labelledby="case-study-overview-title">
        <Container narrow>
          <p className="technical-label">OVERVIEW</p>
          <h2 id="case-study-overview-title">{project.description}</h2>
          <Button href={project.repository} rel="noreferrer" target="_blank" variant="secondary">VIEW SOURCE</Button>
        </Container>
      </section>

      <section className="case-study__sections" aria-label={`${project.title} case study details`}>
        <Container wide>
          {project.sections.map((section, index) => (
            <article className="case-study__section" key={section.title}>
              <p className="case-study__section-index">0{index + 1}</p>
              <div>
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
              </div>
            </article>
          ))}
        </Container>
      </section>

      <nav className="case-study__navigation" aria-label="Project navigation">
        <Container wide>
          <a href="/projects">BACK TO PROJECTS</a>
          {previous ? <a href={`/projects/${previous.slug}`}>← {previous.title}</a> : <span />}
          {next ? <a href={`/projects/${next.slug}`}>{next.title} →</a> : <span />}
        </Container>
      </nav>
    </main>
  );
}
