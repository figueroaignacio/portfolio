// Components
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="max-w-3xl mx-auto space-y-12 pb-5">
      <Hero />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
