import { Route, Routes } from "react-router-dom";

// Pages
import { AboutPage } from "@/pages/About";
import { EducationPage } from "@/pages/Education";
import { HomePage } from "@/pages/Home";
import { NoteDetailsPage } from "@/pages/NoteDetails";
import { NotesPage } from "@/pages/Notes";
import { NotFoundPage } from "@/pages/NotFound";
import { ProjectDetailsPage } from "@/pages/ProjectDetails";
import { ProjectsPage } from "@/pages/Projects";

// Layout
import { BaseLayout } from "@/layout/BaseLayout";
import { Layout } from "@/layout/Layout";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/projects">
          <Route index element={<EducationPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
        </Route>

        <Route path="/notes">
          <Route index element={<NotesPage />} />
          <Route path=":slug" element={<NoteDetailsPage />} />
        </Route>
      </Route>

      <Route element={<BaseLayout />}>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
