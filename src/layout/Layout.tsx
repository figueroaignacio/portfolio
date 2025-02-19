// Components
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="grid-main-container">
      <Navbar />
      <main className="px-4 max-w-3xl mx-auto">
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}
