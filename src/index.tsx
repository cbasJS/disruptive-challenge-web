import { WrappedApp } from './App.tsx';
import './styles/App.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WrappedApp />
  </StrictMode>,
);
