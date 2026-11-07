// Prerender главной: после сборки рендерим её в HTML на Node и вставляем в dist/index.html.
// Браузер сразу рисует Hero из готового HTML, не дожидаясь загрузки и запуска JS,
// а React потом «оживляет» эту разметку (hydrateRoot в main.jsx), не перерисовывая её.
//
// Остальные страницы отдаются из dist/app.html — пустой оболочки, как раньше:
// они загружаются лениво (React.lazy) и на сервере отрисовались бы как «Loading…»
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const serverEntry = path.join(root, 'dist-server', 'entry-server.js');

const shell = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');
const { render } = await import(pathToFileURL(serverEntry).href);

const placeholder = '<div id="root"></div>';
if (!shell.includes(placeholder)) throw new Error(`В dist/index.html нет ${placeholder}`);

// Пустая оболочка для всех страниц, кроме главной
fs.writeFileSync(path.join(dist, 'app.html'), shell);
// Главная с готовой разметкой внутри #root
fs.writeFileSync(path.join(dist, 'index.html'), shell.replace(placeholder, `<div id="root">${render('/')}</div>`));

// Серверная сборка больше не нужна — на Vercel её не выкладываем
fs.rmSync(path.join(root, 'dist-server'), { recursive: true, force: true });

console.log('✓ prerendered / → dist/index.html, SPA shell → dist/app.html');
