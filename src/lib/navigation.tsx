// Pages
import { About } from "@/pages/About";
import { LatestExperience } from "@/pages/LatestExperience";
import { NoteDetails } from "@/pages/NoteDetails";
import { Notes } from "@/pages/Notes";
import { NotFound } from "@/pages/NotFound";
import { ProjectDetails } from "@/pages/ProjectDetails";
import { Projects } from "@/pages/Projects";

// Layouts
import { BaseLayout } from "@/layout/BaseLayout";
import { Layout } from "@/layout/Layout";
import { NoteLayout } from "@/layout/NoteLayout";

export const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/notes", element: <Notes /> },
      { path: "/experience", element: <LatestExperience /> },
    ],
  },
  {
    element: <NoteLayout />,
    children: [{ path: "/notes/:slug", element: <NoteDetails /> }],
  },
  {
    element: <BaseLayout />,
    children: [
      { path: "/projects/:slug", element: <ProjectDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
