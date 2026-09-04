import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

export async function resolve(specifier, context, nextResolve) {
  if (specifier.endsWith('?raw')) {
    const withoutQuery = specifier.slice(0, -4)

    const resolved = await nextResolve(withoutQuery, context)

    return {
      shortCircuit: true,
      url: `${resolved.url}?raw`,
    }
  }

  return nextResolve(specifier, context)
}

export async function load(url, context, nextLoad) {
  if (url.endsWith('?raw')) {
    const realUrl = url.slice(0, -4)

    const source = await fs.readFile(fileURLToPath(realUrl), 'utf8')

    return {
      shortCircuit: true,
      format: 'module',
      source: `export default ${JSON.stringify(source)};`,
    }
  }

  return nextLoad(url, context)
}
