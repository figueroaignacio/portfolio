// Pages
import { About, Home, Notes, Projects } from "@/pages";

export const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "/notes",
    element: <Notes />
  }
]