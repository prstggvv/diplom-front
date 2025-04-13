import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/styles/index.css';
import App from './app/App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './shared/store/index.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
