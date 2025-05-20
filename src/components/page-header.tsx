// Components

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ description, title }: PageHeaderProps) {
  return (
    <header className="bg-secondary space-y-5 rounded-md p-5 text-sm">
      <div className="space-y-3">
        <h1 className="text-xl font-extrabold">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </header>
  );
}
