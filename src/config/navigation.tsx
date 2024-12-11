// Pages
import { About, Home, NoteDetails, Notes, Projects } from "@/pages";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/notes",
    element: <Notes />,
  },
  {
    path: "/notes/:slug",
    element: <NoteDetails />,
  },
];
