import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom'; // Importar createRoot
import { Provider } from 'react-redux';
import { store } from './app/store.js';

import App from './App.jsx';

const container = document.getElementById('root');
const root = createRoot(container); // Usar createRoot para criar a raiz de renderização

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
