interface BadgeProps {
  children: React.ReactNode;
  variant?: 'badge' | 'badge-primary' | 'badge-secondary';
}

export function Badge({ children, variant }: BadgeProps) {
  return <span className={`w-fit ${variant}`}>{children}</span>;
}
