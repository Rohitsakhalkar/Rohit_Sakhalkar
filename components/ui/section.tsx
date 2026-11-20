import type { HTMLAttributes } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  compact?: boolean;
};

export function Section({ className = "", compact = false, ...props }: SectionProps) {
  const spacingClass = compact ? " section--compact" : "";

  return <section className={`section${spacingClass} ${className}`.trim()} {...props} />;
}
