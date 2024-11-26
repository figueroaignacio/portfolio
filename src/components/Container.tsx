import React from "react";

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={`container max-w-3xl mx-auto px-4 lg:px-0 ${className}`}>
      {children}
    </div>
  )
}