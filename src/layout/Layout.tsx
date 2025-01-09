// Components
import { Container } from "@/components/Container";
import { ProfileInfo } from "@/components/ProfileInfo";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 lg:border lg:border-border min-h-[97dvh] mx-5 mt-3 rounded-md">
      <div className="col-span-5">
        <ProfileInfo />
      </div>
      <Container>
        <main className="col-span-7">
          <Outlet />
        </main>
      </Container>
    </div>
  );
}
