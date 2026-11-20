type StatusIndicatorProps = {
  children: string;
};

export function StatusIndicator({ children }: StatusIndicatorProps) {
  return <span className="status-indicator">{children}</span>;
}
