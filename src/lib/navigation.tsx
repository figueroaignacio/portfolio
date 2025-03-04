// Pages
import { AboutPage } from "@/pages/About";
import { EducationPage } from "@/pages/Education";
import { HomePage } from "@/pages/Home";
import { NoteDetailsPage } from "@/pages/NoteDetails";
import { NotesPage } from "@/pages/Notes";
import { NotFoundPage } from "@/pages/NotFound";
import { ProjectDetailsPage } from "@/pages/ProjectDetails";
import { ProjectsPage } from "@/pages/Projects";

// Layouts
import { ArticleLayout } from "@/layout/ArticleLayout";
import { BaseLayout } from "@/layout/BaseLayout";
import { Layout } from "@/layout/Layout";

export const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/notes", element: <NotesPage /> },
      { path: "/education", element: <EducationPage /> },
    ],
  },
  {
    element: <ArticleLayout />,
    children: [
      { path: "/notes/:slug", element: <NoteDetailsPage /> },
      { path: "/projects/:slug", element: <ProjectDetailsPage /> },
    ],
  },
  {
    element: <BaseLayout />,
    children: [{ path: "*", element: <NotFoundPage /> }],
  },
];
