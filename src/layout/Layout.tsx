// Components
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <Navbar />
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
      <Footer />
    </div>
  );
}
