import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
  window.addEventListener('load', () => {
    const swUrl = new URL('./sw.js', window.location.href);
    navigator.serviceWorker.register(swUrl).catch(() => {
      // Ignore registration failures in unsupported embed contexts.
    });
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
