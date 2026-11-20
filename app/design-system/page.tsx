import { Button } from "../../components/ui/button";
import { Container } from "../../components/ui/container";
import { Divider } from "../../components/ui/divider";
import { Section } from "../../components/ui/section";
import { SectionHeading } from "../../components/ui/section-heading";
import { StatusIndicator } from "../../components/ui/status-indicator";
import { Surface } from "../../components/ui/surface";

const colors = [
  ["Background", "#151515", "var(--color-background)"],
  ["Surface", "#202020", "var(--color-surface)"],
  ["Primary", "#F1EFEA", "var(--color-primary)"],
  ["Secondary", "#9B9B9B", "var(--color-secondary)"],
  ["Border", "#333333", "var(--color-border)"],
  ["Accent", "#FF784F", "var(--color-accent)"],
] as const;

export default function DesignSystemPage() {
  return (
    <main>
      <Section compact>
        <Container narrow>
          <SectionHeading
            label="Developer preview"
            title="Design system"
            description="A temporary view of the reusable visual foundations for the portfolio."
          />
          <StatusIndicator>Stage 2 / ready for inspection</StatusIndicator>
        </Container>
      </Section>

      <Divider />

      <Section>
        <Container>
          <div className="preview-stack">
            <section aria-labelledby="typography-heading">
              <SectionHeading label="Typography" title="A clear hierarchy." />
              <div className="preview-stack">
                <div>
                  <p className="technical-label">Display heading</p>
                  <p className="type-display">Still building.</p>
                </div>
                <div>
                  <p className="technical-label">Section heading</p>
                  <p className="type-section">Thoughtful structure.</p>
                </div>
                <p className="type-lead">
                  Lead text uses Geist for a calm reading rhythm and generous line height.
                </p>
                <p className="type-small">
                  Small descriptive text stays secondary without becoming difficult to read.
                </p>
                <p className="metadata">PYTHON · AUTOMATION · BACKEND · BUILDING</p>
              </div>
            </section>

            <Divider />

            <section aria-labelledby="colors-heading">
              <SectionHeading label="Palette" title="Restrained contrast." />
              <div className="preview-grid">
                {colors.map(([name, value, background]) => (
                  <div
                    className="color-swatch"
                    key={name}
                    style={{ backgroundColor: background }}
                  >
                    <p className="color-swatch__name">{name}</p>
                    <p className="color-swatch__value">{value}</p>
                  </div>
                ))}
              </div>
            </section>

            <Divider />

            <section aria-labelledby="controls-heading">
              <SectionHeading label="Controls" title="Quiet, useful actions." />
              <div className="preview-grid">
                <Surface padded>
                  <div className="preview-stack">
                    <p className="technical-label">Primary</p>
                    <Button>Explore</Button>
                  </div>
                </Surface>
                <Surface padded>
                  <div className="preview-stack">
                    <p className="technical-label">Secondary</p>
                    <Button variant="secondary">View details</Button>
                  </div>
                </Surface>
                <Surface padded>
                  <div className="preview-stack">
                    <p className="technical-label">Text / link</p>
                    <Button href="#foundations" variant="text">
                      Read more →
                    </Button>
                  </div>
                </Surface>
              </div>
            </section>

            <Divider />

            <section id="foundations" aria-labelledby="surfaces-heading">
              <SectionHeading
                label="Layout primitives"
                title="Surfaces and separators."
                description="The same spacing, border, and surface rules can support future sections without introducing a card-heavy visual language."
              />
              <Surface padded>
                <div className="preview-stack">
                  <StatusIndicator>Available foundation</StatusIndicator>
                  <p className="type-small">
                    Containers stay fluid, sections use responsive vertical rhythm, and this preview remains usable at narrow widths.
                  </p>
                  <Divider />
                  <p className="metadata">CONTAINER · SECTION · SURFACE · DIVIDER</p>
                </div>
              </Surface>
            </section>
          </div>
        </Container>
      </Section>
    </main>
  );
}
