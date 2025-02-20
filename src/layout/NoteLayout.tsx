import { BackButton } from "@/components/BackButton";
import { Footer } from "@/components/Footer";
import { Outlet } from "react-router-dom";

export function NoteLayout() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:p-16 min-h-screen p-6">
        <div className="lg:col-span-3 sticky top-4 self-start">
          <BackButton />
        </div>
        <div className="lg:col-span-6 overflow-y-auto">
          <Outlet />
        </div>
        <div className="lg:col-span-3 overflow-y-auto"></div>
      </div>
      <Footer />
    </>
  );
}
