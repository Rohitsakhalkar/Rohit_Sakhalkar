import { Container } from "../ui/container";

type ProjectPlaceholderProps = {
  label: string;
  title: string;
  status?: string;
};

export function ProjectPlaceholder({ label, title, status }: ProjectPlaceholderProps) {
  return (
    <main className="project-placeholder">
      <Container narrow>
        <p className="technical-label">{label}</p>
        <h1>{title}</h1>
        {status ? <p>{status}</p> : null}
        <p>The full project case study will be added in a later phase.</p>
      </Container>
    </main>
  );
}
