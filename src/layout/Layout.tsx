// Components
import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-12">
        <Navbar />
        <main>
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
