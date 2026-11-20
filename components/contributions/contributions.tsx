import { contributions } from "../../data/contributions";
import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { Section } from "../ui/section";

export function Contributions() {
  return (
    <Section className="contributions" id="contributions" aria-labelledby="contributions-title">
      <Container wide>
        <div className="contributions__intro">
          <p className="technical-label">OPEN SOURCE</p>
          <div>
            <h2 id="contributions-title">Outside My Repositories</h2>
            <p className="contributions__lead">
              I enjoy contributing beyond my own projects, exploring unfamiliar codebases, understanding existing engineering decisions, and submitting focused improvements.
            </p>
          </div>
        </div>

        <div className="contributions__list">
          {contributions.map((contribution, index) => (
            <article className={`contribution contribution--${contribution.status.toLowerCase()}`} key={contribution.url}>
              <div className="contribution__index" aria-hidden="true">0{index + 1}</div>
              <div className="contribution__body">
                <div className="contribution__header">
                  <div>
                    <p className="technical-label">{contribution.repository}</p>
                    <h3>{contribution.project}</h3>
                  </div>
                  <p className={`contribution__status contribution__status--${contribution.status.toLowerCase()}`}>
                    <span aria-hidden="true" />
                    {contribution.status}
                  </p>
                </div>

                <p className="contribution__summary">{contribution.summary}</p>
                <p className="contribution__details">{contribution.details}</p>
                <p className="technical-label contribution__concepts">{contribution.pullRequest} · {contribution.concepts}</p>

                <Button
                  href={contribution.url}
                  rel="noreferrer"
                  target="_blank"
                  variant={contribution.status === "MERGED" ? "primary" : "secondary"}
                >
                  VIEW PULL REQUEST
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
