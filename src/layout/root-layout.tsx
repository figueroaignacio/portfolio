// Components
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Outlet } from 'react-router';

export function RootLayout() {
  return (
    <div className="flex min-h-dvh flex-col gap-y-12">
      <Header />
      <main className="container flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
