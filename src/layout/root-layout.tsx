// Components
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Outlet } from 'react-router';

export function RootLayout() {
  return (
    <div className="root-layout-grid gap-y-12">
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
