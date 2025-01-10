import { Outlet } from "react-router-dom";

export function BaseLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
