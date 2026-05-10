import { mkdirSync } from 'fs'
import { writeFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import { FOUNDATIONS_CATEGORIES } from '../src/client/definitions/foundations-routing.js'
import { CORE_PAGE_CATEGORIES } from '../src/client/definitions/core-page-routing.js'
import { PRO_PAGE_CATEGORIES } from '../src/client/definitions/pro-page-routing.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const domain = 'https://nebulakit.dev'

const CATEGORY_SETS = [
  { basePath: 'foundations', categories: FOUNDATIONS_CATEGORIES },
  { basePath: 'core', categories: CORE_PAGE_CATEGORIES },
  { basePath: 'pro', categories: PRO_PAGE_CATEGORIES },
]

// Convert categories → URLs
function extractRoutes(basePath, categories) {
  const routes = []

  for (const category of categories) {
    const categoryKey = category.key

    for (const item of category.items) {
      const itemKey = item.key

      for (const section of item.sections) {
        const sectionKey = section.key

        // URL format:
        // /foundations/overview/introduction/why-nebula
        const url = `/${basePath}/${categoryKey}/${itemKey}/${sectionKey}`

        routes.push(url)
      }
    }
  }

  return routes
}

function generateSitemap() {
  let routes = []

  // Flatten all route sets
  for (const cfg of CATEGORY_SETS) {
    routes = routes.concat(extractRoutes(cfg.basePath, cfg.categories))
  }

  // Add any extra URLs you want manually:
  const EXTRA_ROUTES = [
    '',
    '/home',
    '/playground',
    '/patterns',
    '/foundations',
    '/core',
    '/pro',
    '/faq',
    '/blog',
    '/pricing',
    '/pricing/core',
    '/pricing/pro',
    '/feedback',
    '/assistant',
    '/profile/account',
    '/profile/settings',
    '/auth/login',
    '/auth/register',
    '/auth/recover',
  ]

  routes = routes.concat(EXTRA_ROUTES)

  // Build XML
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    routes.map(route => `  <url><loc>${domain}${route}</loc></url>`).join('\n') +
    `\n</urlset>`

  const outputPath = path.join(__dirname, '../build/client/sitemap.xml')

  mkdirSync(path.dirname(outputPath), { recursive: true })
  writeFileSync(outputPath, xml)

  console.log(`✓ Generated sitemap with ${routes.length} URLs`)
}

generateSitemap()
