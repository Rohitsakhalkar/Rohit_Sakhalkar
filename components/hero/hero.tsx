import { Button } from "../ui/button";
import { Container } from "../ui/container";

function HeroArtwork() {
  return (
    <div className="hero__art" aria-hidden="true">
      <svg
        className="hero-artwork"
        viewBox="0 0 620 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" stroke="currentColor" strokeOpacity="0.28" />
          </pattern>
          <linearGradient id="hero-line" x1="84" y1="84" x2="512" y2="420" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF784F" stopOpacity="0.9" />
            <stop offset="1" stopColor="#FF784F" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        <rect x="30" y="28" width="560" height="464" fill="url(#hero-grid)" />
        <path d="M30 28H590V492H30V28Z" stroke="currentColor" strokeOpacity="0.45" />
        <path d="M112 122H282V292H112V122Z" stroke="currentColor" strokeOpacity="0.62" />
        <path d="M282 292H470V420H282V292Z" stroke="currentColor" strokeOpacity="0.62" />
        <path d="M112 208H196V420H112V208Z" stroke="currentColor" strokeOpacity="0.32" />
        <path d="M196 122V208H368V84" stroke="url(#hero-line)" strokeWidth="2" />
        <path d="M282 292L368 208L506 208" stroke="url(#hero-line)" strokeWidth="2" />
        <path d="M196 420H282L368 334H506" stroke="currentColor" strokeOpacity="0.5" />
        <path d="M470 292V420" stroke="currentColor" strokeOpacity="0.45" />
        <path d="M368 84H506V208" stroke="currentColor" strokeOpacity="0.45" />

        <circle cx="196" cy="122" r="6" fill="#FF784F" />
        <circle cx="282" cy="292" r="6" fill="#FF784F" />
        <circle cx="368" cy="208" r="6" fill="#F1EFEA" />
        <circle cx="506" cy="208" r="6" fill="#FF784F" />
        <circle cx="282" cy="420" r="6" fill="#F1EFEA" />

        <path d="M68 84H92M80 72V96" stroke="#FF784F" strokeOpacity="0.72" />
        <path d="M520 454H552M536 438V470" stroke="currentColor" strokeOpacity="0.5" />
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <Container wide>
        <div className="hero__composition">
          <div className="hero__copy">
            <p className="hero__identity hero-reveal hero-reveal--one">
              ROHIT SAKHALKAR / DEVELOPER
            </p>

            <h1 className="hero__heading hero-reveal hero-reveal--two" id="hero-heading">
              <span>Still figuring things out.</span>
              <span>Still building anyway.</span>
            </h1>
          </div>

          <div className="hero__support hero-reveal hero-reveal--three">
            <div className="hero__description">
              <p>I build software, experiment with ideas, and automate the boring stuff.</p>
              <p>Most of my projects start with a question: What if I built this myself?</p>
            </div>

            <div className="hero__actions">
              <Button href="/projects">EXPLORE MY WORK</Button>
              <Button
                href="https://github.com/Rohitsakhalkar"
                rel="noreferrer"
                target="_blank"
                variant="secondary"
              >
                VIEW GITHUB
              </Button>
            </div>
          </div>

          <HeroArtwork />

          <p className="hero__metadata hero-reveal hero-reveal--four">
            PYTHON <span aria-hidden="true">·</span> AUTOMATION <span aria-hidden="true">·</span>{" "}
            BACKEND <span aria-hidden="true">·</span> BUILDING
          </p>
        </div>
      </Container>
    </section>
  );
}
