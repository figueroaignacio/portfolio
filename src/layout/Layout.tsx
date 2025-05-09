// Components
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className="bg-background relative">
      <ScrollToTop />
      <ScrollToTopButton />
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
