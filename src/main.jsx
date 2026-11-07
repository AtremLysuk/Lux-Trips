import { createRoot, hydrateRoot } from 'react-dom/client';
import 'lenis/dist/lenis.css';
import './scss/main.scss';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Главная приходит уже отрисованной (scripts/prerender.mjs) — React только «оживляет»
// готовую разметку. Остальные страницы приходят пустыми — их рисуем с нуля
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}