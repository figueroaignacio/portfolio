import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`min-h-dvh grid place-items-center mx-auto py-5 lg:px-4 ${className}`}
    >
      {children}
    </div>
  );
}
