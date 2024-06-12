import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { StoreContextProvider } from './store/Store-context';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </React.StrictMode>
);