// Components
import { Route, Routes } from 'react-router';

// Layouts
import { RootLayout } from '@/layout/root-layout';

// Pages
import { BlogPage } from '@/pages/blog';
import { EducationPage } from '@/pages/education';
import { HomePage } from '@/pages/home';

export function AppRouter() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="blog" element={<BlogPage />} />
      </Route>
    </Routes>
  );
}
