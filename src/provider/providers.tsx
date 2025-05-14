// Providers
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from './theme-provider';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="system" storageKey="theme-ui-portfolio">
        {children}
      </ThemeProvider>
    </BrowserRouter>
  );
}
