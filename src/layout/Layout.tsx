// Components
import { Navbar } from "@/components/Navbar";

export function Layout() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-12">
        <Navbar />
        <main>{/* <Outlet /> */}</main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
