import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { normalizeRoutePath } from './utils/seo';

const rootElement = document.getElementById('root')!;
const prerenderPath = rootElement.getAttribute('data-prerender-path');
const currentPath = normalizeRoutePath(window.location.pathname);

if (rootElement.children.length > 0 && prerenderPath === currentPath) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}
