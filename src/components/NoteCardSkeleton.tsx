export function NoteCardSkeleton() {
  return (
    <div className="p-4 rounded-lg border-[1px] border-border bg-card space-y-4 h-full animate-pulse">
      <div className="h-6 bg-primary-foreground rounded-2xl w-3/4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-primary-foreground rounded-2xl"></div>
        <div className="h-4 bg-primary-foreground rounded-2xl"></div>
        <div className="h-4 bg-primary-foreground rounded-2xl"></div>
      </div>
      <div className="h-10 bg-primary-foreground rounded-2xl"></div>
    </div>
  );
}
