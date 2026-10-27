// Конвертирует PNG/JPG из public/ в WebP, меняет пути в коде и удаляет оригиналы.
// Запуск из корня проекта: node scripts/convert-images.mjs
// Иконки сайта в корне public/ (favicon, apple-touch-icon и т.п.) не трогаем —
// их форматы требуют браузеры и манифест.

import { readdir, readFile, writeFile, unlink, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public");
// Где ищем ссылки на картинки
const CODE_TARGETS = ["src", "index.html", "public/data.json"];
const CODE_EXTENSIONS = [
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".scss",
  ".css",
  ".html",
  ".json",
];
const IMAGE_RE = /\.(png|jpe?g)$/i;
// Качество WebP: 80 — на глаз неотличимо от оригинала, вес в разы меньше
const QUALITY = 80;

const walk = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name);
      return entry.isDirectory() ? walk(full) : [full];
    }),
  );
  return files.flat();
};

const collectCodeFiles = async () => {
  const result = [];
  for (const target of CODE_TARGETS) {
    const full = path.join(ROOT, target);
    if (!existsSync(full)) continue;
    const isDir = (await stat(full)).isDirectory();
    const files = isDir ? await walk(full) : [full];
    result.push(
      ...files.filter((file) => CODE_EXTENSIONS.includes(path.extname(file))),
    );
  }
  return result;
};

const formatKb = (bytes) => `${Math.round(bytes / 1024)} KB`;

// 1. Картинки внутри подпапок public/ (корневые иконки сайта пропускаем)
const images = (await walk(PUBLIC_DIR)).filter(
  (file) => IMAGE_RE.test(file) && path.dirname(file) !== PUBLIC_DIR,
);

let before = 0;
let after = 0;
const converted = [];

for (const file of images) {
  // Пробелы в именах ломают url() в CSS — заодно убираем их
  const cleanName = path
    .basename(file)
    .replace(/\s+/g, "")
    .replace(IMAGE_RE, ".webp");
  const target = path.join(path.dirname(file), cleanName);

  if (!existsSync(target)) {
    await sharp(file).webp({ quality: QUALITY }).toFile(target);
  }

  const original = (await stat(file)).size;
  const result = (await stat(target)).size;
  before += original;
  after += result;
  converted.push({ file, target });
  console.log(
    `${path.relative(PUBLIC_DIR, file)}: ${formatKb(original)} → ${formatKb(result)}`,
  );
}

// 2. Меняем пути в коде: /images/a.png → /images/a.webp
const codeFiles = await collectCodeFiles();
let changedFiles = 0;

for (const codeFile of codeFiles) {
  const source = await readFile(codeFile, "utf8");
  let updated = source;

  for (const { file, target } of converted) {
    const fromUrl =
      "/" + path.relative(PUBLIC_DIR, file).split(path.sep).join("/");
    const toUrl =
      "/" + path.relative(PUBLIC_DIR, target).split(path.sep).join("/");
    // Варианты записи: /x.png, ./x.png и с экранированным пробелом в SCSS (x\ .png)
    const variants = [fromUrl, fromUrl.replace(/ /g, "\\ ")];
    for (const variant of variants) {
      updated = updated
        .split("." + variant)
        .join(toUrl)
        .split(variant)
        .join(toUrl);
    }
  }

  if (updated !== source) {
    await writeFile(codeFile, updated);
    changedFiles += 1;
    console.log(`пути обновлены: ${path.relative(ROOT, codeFile)}`);
  }
}

// 3. Удаляем оригиналы, на которые больше никто не ссылается
const allCode = (
  await Promise.all(codeFiles.map((file) => readFile(file, "utf8")))
).join("\n");
let removed = 0;

for (const { file } of converted) {
  const url = path.relative(PUBLIC_DIR, file).split(path.sep).join("/");
  if (allCode.includes(url) || allCode.includes(url.replace(/ /g, "\\ "))) {
    console.warn(`оставлен, на него ещё есть ссылка: ${url}`);
    continue;
  }
  await unlink(file);
  removed += 1;
}

console.log("\n——— Итог ———");
console.log(`картинок: ${converted.length}, удалено оригиналов: ${removed}`);
console.log(`файлов кода изменено: ${changedFiles}`);
console.log(`вес: ${formatKb(before)} → ${formatKb(after)}`);
