import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n'; // ← importa la configuración
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
