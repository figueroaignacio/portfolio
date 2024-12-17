// Skeleton NoteCard Component
export function NoteCardSkeleton() {
  return (
    <div className="w-full p-4 rounded-lg border-[1px] border-border bg-card space-y-4 h-full flex flex-col animate-pulse">
      <div className="h-6 bg-primary-foreground rounded-md w-3/4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-primary-foreground rounded-md w-96"></div>
        <div className="h-4 bg-primary-foreground rounded-md w-80"></div>
        <div className="h-4 bg-primary-foreground rounded-md w-72"></div>
      </div>
      <div className="h-10 bg-primary-foreground rounded-md w-full self-center"></div>
    </div>
  );
}
