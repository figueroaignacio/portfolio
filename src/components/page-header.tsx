// Components
import { Separator } from './separator';

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ description, title }: PageHeaderProps) {
  return (
    <header>
      <div className="space-y-3">
        <h1 className="text-xl font-extrabold">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <Separator />
    </header>
  );
}
