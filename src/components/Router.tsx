// Components
import { Route, Routes } from "react-router-dom";

// Config
import { routes } from "@/config/navigation.tsx";

export function AppRouter() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route element={route.element} path={route.path} />
      ))}
    </Routes>
  )
}

