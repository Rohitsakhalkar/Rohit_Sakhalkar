type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="section-heading">
      {label ? <p className="section-heading__label">{label}</p> : null}
      <h2 className="section-heading__title">{title}</h2>
      {description ? <p className="type-lead">{description}</p> : null}
    </header>
  );
}
