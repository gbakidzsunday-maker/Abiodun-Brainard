import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Silence benign WebSocket/Vite HMR connection errors in the preview/development environment
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason;
    if (reason) {
      const message = typeof reason === 'string' ? reason : (reason.message || '');
      if (
        message.includes('WebSocket') ||
        message.includes('websocket') ||
        message.includes('ws://') ||
        message.includes('wss://')
      ) {
        event.preventDefault();
        console.warn('Silenced benign development WebSocket error:', message);
      }
    }
  });

  window.addEventListener('error', (event) => {
    const message = event.message || '';
    if (
      message.includes('WebSocket') ||
      message.includes('websocket') ||
      message.includes('ws://') ||
      message.includes('wss://')
    ) {
      event.preventDefault();
      console.warn('Silenced benign development WebSocket error:', message);
    }
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

