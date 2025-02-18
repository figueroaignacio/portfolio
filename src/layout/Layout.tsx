// Components
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="px-2 grid-main-container">
        <Navbar />
        <main className="px-2">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
