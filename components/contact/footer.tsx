import Link from "next/link";
import { Container } from "../ui/container";

const footerLinks = [
  { label: "HOME", href: "/" },
  { label: "PROJECTS", href: "/projects" },
  { label: "ABOUT", href: "/#about" },
  { label: "CONTRIBUTIONS", href: "/contributions" },
  { label: "CONTACT", href: "/#contact" },
] as const;

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__top">
          <Link className="site-footer__brand" href="/">ROHIT SAKHALKAR</Link>
          <p className="site-footer__signature">Built by Sakhalkar, in search of meaning.</p>
        </div>

        <div className="site-footer__grid">
          <nav aria-label="Footer navigation" className="site-footer__nav">
            {footerLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
          </nav>
          <nav aria-label="Footer social links" className="site-footer__social">
            <a href="https://github.com/Rohitsakhalkar" target="_blank" rel="noreferrer">GITHUB</a>
            <span className="site-footer__unavailable" title="LinkedIn profile not provided">LINKEDIN</span>
            <span className="site-footer__unavailable" title="Email address not provided">EMAIL</span>
          </nav>
        </div>

        <p className="site-footer__copyright">© 2026 · Crafted with curiosity.</p>
      </Container>
    </footer>
  );
}
