import { journeyMilestones } from "../../data/journey";
import { Container } from "../ui/container";
import { Section } from "../ui/section";

export function DeveloperJourney() {
  return (
    <Section className="journey" id="journey" aria-labelledby="journey-title">
      <Container wide>
        <div className="journey__intro">
          <p className="technical-label">DEVELOPER JOURNEY</p>
          <div>
            <h2 id="journey-title">A work in progress.</h2>
            <p className="journey__lead">
              Every project taught me something different. Some taught me how to build. Others taught me how to break things, fix them, and rethink the approach.
            </p>
          </div>
        </div>

        <div className="journey__timeline">
          {journeyMilestones.map((milestone, index) => (
            <article className={`journey__item journey__item--${index % 2 === 0 ? "left" : "right"}`} key={milestone.number}>
              <div className="journey__marker" aria-hidden="true">
                <span>{milestone.number}</span>
              </div>
              <div className="journey__content">
                <p className="technical-label">{milestone.number}</p>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
