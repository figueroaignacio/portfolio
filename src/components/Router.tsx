import { createBrowserRouter } from "react-router";

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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "education", element: <EducationPage /> },
      {
        path: "projects",
        children: [
          { index: true, element: <ProjectsPage /> },
          {
            element: <ArticleLayout />,
            children: [{ path: ":slug", element: <ProjectDetailsPage /> }],
          },
        ],
      },
      {
        path: "notes",
        children: [
          { index: true, element: <NotesPage /> },
          {
            element: <ArticleLayout />,
            children: [{ path: ":slug", element: <NoteDetailsPage /> }],
          },
        ],
      },
    ],
  },
  {
    element: <BaseLayout />,
    children: [{ path: "*", element: <NotFoundPage /> }],
  },
]);
