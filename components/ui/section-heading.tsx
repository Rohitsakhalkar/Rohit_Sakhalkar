type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  titleId?: string;
  headingLevel?: "h1" | "h2";
};

export function SectionHeading({
  label,
  title,
  description,
  titleId,
  headingLevel = "h2",
}: SectionHeadingProps) {
  const Heading = headingLevel;

  return (
    <header className="section-heading">
      {label ? <p className="section-heading__label">{label}</p> : null}
      <Heading className="section-heading__title" id={titleId}>{title}</Heading>
      {description ? <p className="type-lead">{description}</p> : null}
    </header>
  );
}
