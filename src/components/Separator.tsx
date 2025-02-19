export function Separator({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <div className="w-full h-[.1px] bg-border"></div>
      <div className="text-muted-foreground">o</div>
      <div className="w-full h-[.1px] bg-border"></div>
    </div>
  );
}
