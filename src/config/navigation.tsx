// Pages
import { Layout } from "@/layout/Layout";
import { About } from "@/pages/About";
import { NoteDetails } from "@/pages/NoteDetails";
import { Notes } from "@/pages/Notes";
import { Projects } from "@/pages/Projects";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/notes", element: <Notes /> },
      { path: "/notes/:slug", element: <NoteDetails /> },
    ],
  },
];
