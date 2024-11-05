// Components
import { SelectLanguage } from "@/components/SelectLanguage.tsx";
import { ToggleTheme } from "@/components/ToggleTheme.tsx";

export function BottomRightControls() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2">
      <SelectLanguage />
      <ToggleTheme />
    </div>
  );
}