import { TerminalIcon } from "./Icons";

export function Alert({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center gap-3 p-4 mb-4 border-border border rounded-2xl ">
      <div className="flex-1">
        <TerminalIcon />
      </div>
      <span className="text-xs leading-5">{children}</span>
    </div>
  );
}
