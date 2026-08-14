import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const outDir = join(root, 'combined-dist');

// 每次重新拼之前清空，避免残留旧文件
if (existsSync(outDir)) {
  rmSync(outDir, { recursive: true, force: true });
}
mkdirSync(outDir);

const apps = [
  { name: 'main-site', subpath: '' },
  { name: 'auth-docs', subpath: 'auth' },
  { name: 'cli-docs', subpath: 'cli' },
];

for (const app of apps) {
  const src = join(root, 'apps', app.name, 'dist');
  const dest = app.subpath ? join(outDir, app.subpath) : outDir;

  if (!existsSync(src)) {
    console.error(`Missing build output: ${src}. Run "pnpm build" first.`);
    process.exit(1);
  }

  cpSync(src, dest, { recursive: true });
  console.log(`Copied ${app.name} -> ${app.subpath || '/'}`);
}

console.log(`\nDone. Combined output at ${outDir}`);
