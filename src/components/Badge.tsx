import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <div className="text-xs bg-primary-foreground py-1 px-3 rounded-full">{children}</div>
  )
}