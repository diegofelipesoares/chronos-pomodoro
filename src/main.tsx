//Esse arquivo recebe o principal compomente App.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Utilização dos componentes */}
    <App />
  </StrictMode>,
);
