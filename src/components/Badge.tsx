import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <div className="text-xs border border-border py-1 px-3 rounded-full">
      {children}
    </div>
  );
}
