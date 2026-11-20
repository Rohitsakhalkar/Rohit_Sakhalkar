import { Container } from "../ui/container";
import { Section } from "../ui/section";

const buildingInterests = ["Python tools", "Automation", "Backend systems", "Practical applications"];
const workingApproach = ["Learn by building", "Experiment", "Break things", "Debug", "Improve"];
const currentFocus = [
  "Building Get It Done",
  "Improving my engineering fundamentals",
  "Exploring real-world development workflows",
  "Looking for entry-level opportunities",
];

function AboutList({ items }: { items: string[] }) {
  return (
    <ul className="about__list">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

export function About() {
  return (
    <Section className="about" id="about" aria-labelledby="about-title">
      <Container wide>
        <div className="about__intro">
          <p className="technical-label">ABOUT</p>
          <h2 id="about-title">Curious about what makes things work.</h2>
        </div>

        <div className="about__layout">
          <div className="about__copy">
            <p>I&apos;m a BCA graduate who got into programming because I was curious about what happens behind the things we use every day.</p>
            <p>That curiosity eventually turned into building my own projects, exploring automation, working with Python, and trying to solve problems instead of just learning how to write code.</p>
            <p>I enjoy having an idea and figuring out how to turn it into something functional. Sometimes that means building a tool, sometimes a web application, sometimes spending hours trying to understand why something broke.</p>
            <p>I&apos;m still growing as a developer, and I see that as part of the process.</p>
            <p>I&apos;m interested in opportunities where I can learn from real engineering work, contribute meaningfully, and keep building.</p>
          </div>

          <div className="about__notes">
            <section className="about__note" aria-labelledby="about-building-title">
              <h3 id="about-building-title">What I enjoy building</h3>
              <AboutList items={buildingInterests} />
            </section>
            <section className="about__note" aria-labelledby="about-approach-title">
              <h3 id="about-approach-title">How I approach things</h3>
              <AboutList items={workingApproach} />
            </section>
            <section className="about__note" aria-labelledby="about-current-title">
              <h3 id="about-current-title">Currently</h3>
              <AboutList items={currentFocus} />
            </section>
          </div>
        </div>
      </Container>
    </Section>
  );
}
