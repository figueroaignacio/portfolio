// Pages
import { About } from "@/pages/About";
import { Home } from "@/pages/Home";
import { NoteDetails } from "@/pages/NoteDetails";
import { Notes } from "@/pages/Notes";
import { Projects } from "@/pages/Projects";

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
