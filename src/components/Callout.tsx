import { TerminalIcon } from "./Icons";

interface CalloutProps {
  message: string;
}

export function Callout({ message }: CalloutProps) {
  return (
    <div className="flex justify-center gap-3 p-6 mb-4 border-border border rounded-2xl">
      <TerminalIcon />
      <span className="text-xs font-medium">{message}</span>
    </div>
  );
}
