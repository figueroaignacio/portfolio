// Components
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="grid-main-container bg-background relative">
      <Navbar />
      <main className="px-4 lg:px-2 max-w-3xl mx-auto my-12 lg:my-16">
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}
