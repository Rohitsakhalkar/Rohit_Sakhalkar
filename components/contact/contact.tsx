import { Container } from "../ui/container";
import { StatusIndicator } from "../ui/status-indicator";

type ContactLink = {
  label: string;
  href: string | null;
  detail: string;
};

const contactLinks: ContactLink[] = [
  { label: "EMAIL", href: "mailto:rohitsakhalkar3@gmail.com", detail: "ROHITSAKHALKAR3@GMAIL.COM" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/rohitsakhalkar9347/", detail: "LINKEDIN.COM/IN/ROHITSAKHALKAR9347" },
  { label: "GITHUB", href: "https://github.com/Rohitsakhalkar", detail: "GITHUB.COM/ROHITSAKHALKAR" },
  { label: "RESUME", href: "/Rohit_Sakhalkar_Python_Developer_Resume.pdf", detail: "PDF" },
] as const;

export function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <Container>
        <div className="contact__intro">
          <p className="contact__label">CONTACT</p>
          <div>
            <h2 id="contact-title">Have something worth building?</h2>
            <p className="contact__lead">
              I&apos;m looking for opportunities to learn, contribute, and work on real software.
            </p>
          </div>
        </div>

        <div className="contact__body">
          <div className="contact__availability">
            <StatusIndicator>OPEN TO INTERNSHIPS &amp; ENTRY-LEVEL ROLES</StatusIndicator>
            <p>The best way to explore my work right now is through the projects and repositories below.</p>
          </div>

          <nav className="contact__links" aria-label="Contact links">
            {contactLinks.map((link) => (
              <div className="contact__link-row" key={link.label}>
                <span className="contact__link-label">{link.label}</span>
                {link.href ? (
                  <a
                    className="contact__link"
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {link.detail}
                  </a>
                ) : (
                  <span className="contact__link contact__link--unavailable">{link.detail}</span>
                )}
              </div>
            ))}
          </nav>
        </div>
      </Container>
    </section>
  );
}
