// Components
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="max-w-3xl mx-auto">
      <Hero />
      <div className="space-y-12 pt-5 px-2 lg:px-5">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
