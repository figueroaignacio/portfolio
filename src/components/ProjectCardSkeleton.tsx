// Skeleton for ProjectCard
export function ProjectCardSkeleton() {
  return (
    <div className="bg-card rounded-lg border border-border animate-pulse">
      <div className="p-6 space-y-4">
        <div className="h-5 bg-primary-foreground rounded-md w-3/4"></div>
        <div className="space-y-2">
          <div className="h-3 bg-primary-foreground rounded-md w-full"></div>
          <div className="h-3 bg-primary-foreground rounded-md w-5/6"></div>
        </div>
        <div className="flex justify-between pt-4 space-x-4">
          <div className="h-8 bg-primary-foreground rounded-md w-1/2"></div>
          <div className="h-8 bg-primary-foreground rounded-md w-1/2"></div>
        </div>
        <div className="text-center">
          <div className="h-8 bg-primary-foreground rounded-md w-full"></div>
        </div>
      </div>
    </div>
  );
}
