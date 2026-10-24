import { createRoot } from 'react-dom/client';
import 'lenis/dist/lenis.css';
import './scss/main.scss';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
