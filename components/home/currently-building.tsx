import { Container } from "../ui/container";
import { Section } from "../ui/section";
import { StatusIndicator } from "../ui/status-indicator";

export function CurrentlyBuilding() {
  return (
    <Section
      aria-labelledby="currently-building-heading"
      className="currently-building"
      id="currently-building"
    >
      <Container>
        <div className="currently-building__header">
          <p className="currently-building__label">CURRENTLY BUILDING</p>
        </div>

        <div className="currently-building__panel">
          <div className="currently-building__project">
            <h2 id="currently-building-heading">Get It Done</h2>
            <p>Building a platform that connects people through local opportunities and skills.</p>
          </div>

          <div className="currently-building__details">
            <StatusIndicator>IN DEVELOPMENT</StatusIndicator>
            <p className="currently-building__focus">BACKEND DEVELOPMENT · FASTAPI</p>
            <p className="currently-building__supporting-text">
              Currently focused on completing the backend core before moving into frontend development.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
