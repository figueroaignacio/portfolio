// Pages
import { Home } from "@/pages/Home"
import { About } from "@/pages/About"

export const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  }
]