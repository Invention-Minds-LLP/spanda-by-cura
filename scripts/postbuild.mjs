// Runs after `ng build` (see netlify.toml).
// 1. Replaces the __ORIGIN__ token in prerendered HTML with the deployed site URL.
// 2. Writes sitemap.xml and robots.txt.
// 3. Keeps the site out of search engines unless SITE_INDEXABLE=true on the production deploy
//    (the developer handoff requires noindex on staging until launch is approved).
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const root = 'dist/spanda/browser';
const origin = (process.env.SITE_ORIGIN || process.env.URL || 'http://localhost:4200').replace(/\/$/, '');
const indexable = process.env.SITE_INDEXABLE === 'true' && (process.env.CONTEXT ?? 'production') === 'production';
const alwaysHidden = ['/v1', '/v2', '/opening'];

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const pages = [];
for (const file of walk(root).filter((f) => f.endsWith('index.html'))) {
  const route = '/' + relative(root, file).split(sep).slice(0, -1).join('/');
  let html = readFileSync(file, 'utf8').replaceAll('__ORIGIN__', origin);
  const hide = !indexable || alwaysHidden.includes(route);
  if (hide && !html.includes('name="robots"')) {
    html = html.replace('</head>', '<meta name="robots" content="noindex, nofollow"></head>');
  }
  writeFileSync(file, html);
  if (!alwaysHidden.includes(route)) pages.push(route === '/' ? '/' : route);
}

const today = new Date().toISOString().slice(0, 10);
const urls = pages
  .sort()
  .map((p) => `  <url><loc>${origin}${p}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n');
writeFileSync(
  join(root, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
writeFileSync(
  join(root, 'robots.txt'),
  indexable
    ? `User-agent: *\nAllow: /\nDisallow: /v1\nDisallow: /v2\nDisallow: /opening\n\nSitemap: ${origin}/sitemap.xml\n`
    : `# Staging: not for indexing until launch approval (set SITE_INDEXABLE=true on production).\nUser-agent: *\nDisallow: /\n`,
);
console.log(`postbuild: ${pages.length} pages, origin ${origin}, indexable=${indexable}`);
