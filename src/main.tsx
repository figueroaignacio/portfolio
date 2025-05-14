// React
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// CSS
import './index.css';

// Components
import App from './App.tsx';
import { Providers } from './provider/providers.tsx';

// i18n
import './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
);
