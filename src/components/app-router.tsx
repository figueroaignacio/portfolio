// Components
import { Route, Routes } from 'react-router';

// Layouts
import { RootLayout } from '@/layout/root-layout';

// Pages
import { AboutPage } from '@/pages/about';
import { BlogPage } from '@/pages/blog';
import { HomePage } from '@/pages/home';
import { PostDetailsPage } from '@/pages/post-details';
import { ProjectsPage } from '@/pages/projects';

export function AppRouter() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/posts/:slug" element={<PostDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}
