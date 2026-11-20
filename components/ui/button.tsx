import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "text";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  href?: string;
};

type ActionButtonProps = ButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonProps>;

type LinkButtonProps = ButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonProps>;

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}: ActionButtonProps | LinkButtonProps) {
  const buttonClassName = `button button--${variant} ${className}`.trim();

  if (href) {
    return (
      <a className={buttonClassName} href={href} {...(props as LinkButtonProps)}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClassName} type="button" {...(props as ActionButtonProps)}>
      {children}
    </button>
  );
}
