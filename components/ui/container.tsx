import type { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  narrow?: boolean;
  wide?: boolean;
};

export function Container({
  className = "",
  narrow = false,
  wide = false,
  ...props
}: ContainerProps) {
  const widthClass = narrow
    ? " container--narrow"
    : wide
      ? " container--wide"
      : "";

  return <div className={`container${widthClass} ${className}`.trim()} {...props} />;
}
