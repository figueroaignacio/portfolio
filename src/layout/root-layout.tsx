// Components
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Outlet } from 'react-router';

export function RootLayout() {
  return (
    <div className="root-layout-grid">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
