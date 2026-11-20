import type { HTMLAttributes } from "react";

type SurfaceProps = HTMLAttributes<HTMLDivElement> & {
  padded?: boolean;
};

export function Surface({ className = "", padded = false, ...props }: SurfaceProps) {
  const paddingClass = padded ? " surface--padded" : "";

  return <div className={`surface${paddingClass} ${className}`.trim()} {...props} />;
}
