import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { Section } from "../ui/section";
import {
  HomepageDataStructuresArtwork,
  HomepageForgeArtwork,
  HomepageLearnableArtwork,
} from "./project-artwork";

export function SelectedProjects() {
  return (
    <Section className="selected-projects" id="selected-projects" aria-labelledby="selected-projects-title">
      <Container wide>
        <header className="selected-projects__header">
          <p className="technical-label">SELECTED PROJECTS</p>
          <h2 id="selected-projects-title">A selection of things I&apos;ve built.</h2>
        </header>

        <article className="selected-project selected-project--forge">
          <div className="selected-project__copy">
            <p className="technical-label">PYTHON TOOLING</p>
            <h3>Forge</h3>
            <p className="selected-project__description">
              A Python-based CLI automation toolkit that started as a Python environment manager and expanded into a collection of tools for development and everyday system operations.
            </p>
            <p className="selected-project__summary">Environments, packages, files, applications, executables, and task history.</p>
            <div className="selected-project__meta">
              <p className="selected-project__status">COMPLETED · V1</p>
              <p className="technical-label">PYTHON · CLI · PATHLIB · SUBPROCESS · VENV · JSON</p>
            </div>
            <div className="button-group">
              <Button href="/projects/forge" variant="primary">VIEW PROJECT</Button>
              <Button href="https://github.com/Rohitsakhalkar/forge" variant="secondary" target="_blank" rel="noreferrer">VIEW SOURCE</Button>
            </div>
          </div>
          <div className="selected-project__art selected-project__art--forge"><HomepageForgeArtwork /></div>
        </article>

        <div className="selected-projects__grid">
          <article className="selected-project selected-project--structures">
            <div className="selected-project__art"><HomepageDataStructuresArtwork /></div>
            <div className="selected-project__copy">
              <p className="technical-label">FUNDAMENTALS / PYTHON</p>
              <h3>Data Structures</h3>
              <p className="selected-project__description">
                A Python package implementing fundamental data structures from scratch to explore their internal mechanics, object-oriented programming, recursion, iteration, and testing.
              </p>
              <p className="selected-project__summary">Stack · Queue · Singly Linked List · Doubly Linked List · Binary Search Tree</p>
              <p className="technical-label">PYTHON · OOP · PYTEST · SETUPTOOLS</p>
              <div className="button-group">
                <Button href="/projects/data-structures" variant="text">VIEW PROJECT</Button>
                <Button href="https://github.com/Rohitsakhalkar/datastructures" variant="text" target="_blank" rel="noreferrer">VIEW SOURCE</Button>
              </div>
            </div>
          </article>

          <article className="selected-project selected-project--learnable">
            <div className="selected-project__copy">
              <p className="technical-label">ACCESSIBLE E-LEARNING</p>
              <h3>LearnAble</h3>
              <p className="selected-project__description">
                An accessible e-learning platform prototype built independently as a final-semester project. LearnAble explores different ways of interacting with digital learning through voice-assisted, visual, simplified, and standard experiences.
              </p>
              <div className="selected-project__meta">
                <p className="selected-project__status">PROTOTYPE · FINAL SEMESTER PROJECT</p>
                <p className="technical-label">SOLO DEVELOPER</p>
                <p className="technical-label">NEXT.JS · REACT · TYPESCRIPT · TAILWIND · FIREBASE · WEB SPEECH API · N8N</p>
              </div>
              <p className="selected-project__summary">Authentication, accessibility preferences, learning progress, quizzes, settings, analytics, voice navigation, and speech feedback.</p>
              <div className="button-group">
                <Button href="/projects/learnable" variant="primary">VIEW PROJECT</Button>
                <Button href="https://github.com/Rohitsakhalkar/learnable" variant="secondary" target="_blank" rel="noreferrer">VIEW SOURCE</Button>
              </div>
            </div>
            <div className="selected-project__art selected-project__art--learnable"><HomepageLearnableArtwork /></div>
          </article>
        </div>
      </Container>
    </Section>
  );
}
