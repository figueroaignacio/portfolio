import { InfoIcon } from "./Icons";

export function Alert({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 p-4 mb-4 bg-[#FFF9C4] dark:bg-[#FFF176]/60 rounded-2xl">
      <InfoIcon />
      <span className="text-xs">{children}</span>
    </div>
  );
}
