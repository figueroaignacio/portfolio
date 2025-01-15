import { Route, Routes } from "react-router-dom";

// Config
import { routes } from "@/lib/navigation";

export function AppRouter() {
  const renderRoutes = (
    routes: Array<{
      element: React.ReactNode;
      children?: Array<{ path: string; element: React.ReactNode }>;
    }>
  ) =>
    routes.map((route, index) => (
      <Route key={index} element={route.element}>
        {route.children?.map((child, childIndex) => (
          <Route key={childIndex} path={child.path} element={child.element} />
        ))}
      </Route>
    ));

  return <Routes>{renderRoutes(routes)}</Routes>;
}
