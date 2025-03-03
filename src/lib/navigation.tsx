// Pages
import { About } from "@/pages/About";
import { Education } from "@/pages/Education";
import { Home } from "@/pages/Home";
import { NoteDetails } from "@/pages/NoteDetails";
import { Notes } from "@/pages/Notes";
import { NotFound } from "@/pages/NotFound";
import { ProjectDetails } from "@/pages/ProjectDetails";
import { Projects } from "@/pages/Projects";

// Layouts
import { ArticleLayout } from "@/layout/ArticleLayout";
import { BaseLayout } from "@/layout/BaseLayout";
import { Layout } from "@/layout/Layout";

export const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/about", element: <About /> },
      { path: "/notes", element: <Notes /> },
      { path: "/education", element: <Education /> },
    ],
  },
  {
    element: <ArticleLayout />,
    children: [
      { path: "/notes/:slug", element: <NoteDetails /> },
      { path: "/projects/:slug", element: <ProjectDetails /> },
    ],
  },
  {
    element: <BaseLayout />,
    children: [{ path: "*", element: <NotFound /> }],
  },
];
