import { Route, Routes } from "react-router-dom";

// Config
import { routes } from "@/lib/navigation";

export function AppRouter() {
  const renderRoutes = (
    routes: Array<{ path: string; element: any; children?: any }>
  ) =>
    routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        element={route.element}
        children={route.children ? renderRoutes(route.children) : null}
      />
    ));

  return <Routes>{renderRoutes(routes)}</Routes>;
}
