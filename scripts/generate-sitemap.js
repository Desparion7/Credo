const fs = require('fs');
const path = require('path');

const pages = [
	'/',
	'/kontakt',
	'/oferta',
	'/wyjazd',
	'/polityka-prywatnosci',
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) =>
			`<url>
  <loc>${`https://credo-krosno.pl${page}`}</loc>
</url>`
	)
	.join('')}
</urlset>
`;

fs.writeFileSync(path.resolve('./public/sitemap.xml'), sitemap);
