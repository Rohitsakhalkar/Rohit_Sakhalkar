"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "../ui/container";

const navigationItems = [
  { label: "HOME", href: "/" },
  { label: "PROJECTS", href: "/projects" },
  { label: "CONTRIBUTIONS", href: "/contributions" },
  { label: "ABOUT", href: "/#about" },
  { label: "CONTACT", href: "/#contact" },
] as const;

const resumeHref = process.env.NEXT_PUBLIC_RESUME_URL ?? "/Rohit_Sakhalkar_Python_Developer_Resume.pdf";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 12);
    const updatePathname = () => setPathname(window.location.pathname);

    updateScrollState();
    updatePathname();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("popstate", updatePathname);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("popstate", updatePathname);
    };
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`site-nav${isScrolled ? " site-nav--scrolled" : ""}`}>
      <Container wide>
        <div className="site-nav__bar">
          <Link className="site-nav__brand" href="/" onClick={closeMenu}>
            ROHIT SAKHALKAR
          </Link>

          <nav className="site-nav__desktop" aria-label="Primary navigation">
            {navigationItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  className={`site-nav__link${active ? " site-nav__link--active" : ""}`}
                  href={item.href}
                  key={item.href}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {resumeHref ? (
            <a className="site-nav__resume" href={resumeHref}>
              RESUME
            </a>
          ) : (
            <span
              className="site-nav__resume site-nav__resume--unavailable"
              aria-disabled="true"
              title="Resume link will be added when the resume is available"
            >
              RESUME
            </span>
          )}

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="site-nav__menu-button"
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" className="site-nav__menu-icon" />
            <span className="site-nav__menu-label">MENU</span>
          </button>
        </div>

        <nav
          aria-hidden={!isMenuOpen}
          aria-label="Mobile navigation"
          className="site-nav__mobile"
          data-open={isMenuOpen}
          id="mobile-navigation"
        >
          {navigationItems.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                className={`site-nav__mobile-link${active ? " site-nav__mobile-link--active" : ""}`}
                href={item.href}
                key={item.href}
                tabIndex={isMenuOpen ? 0 : -1}
                aria-current={active ? "page" : undefined}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            );
          })}
          {resumeHref ? (
            <a
              className="site-nav__mobile-resume"
              href={resumeHref}
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={closeMenu}
            >
              RESUME
            </a>
          ) : (
            <span
              className="site-nav__mobile-resume site-nav__mobile-resume--unavailable"
              aria-disabled="true"
            >
              RESUME UNAVAILABLE
            </span>
          )}
        </nav>
      </Container>
    </header>
  );
}
