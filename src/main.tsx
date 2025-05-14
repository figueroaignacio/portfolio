// React
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// CSS
import './index.css';

// Main components
import App from './App.tsx';

// i18n
import './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
