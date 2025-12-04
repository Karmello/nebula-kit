import { pascalCase } from 'change-case'

import META from 'client/meta'

const DEFAULT_DESCRIPTION =
  'React UI system built on composition - small, consistent parts combining into larger structures with clarity and control. Each component follows the same foundation, producing apps that stay predictable, stable and effortless to scale.'

export const generateTitleFromPath = (path: string) => {
  try {
    const parts = path
      .split('?')[0]
      .split('/')
      .filter(Boolean)
      .map(p => p.replace(/-/g, ' '))
      .map(p => p.replace(/\b\w/g, c => c.toUpperCase()))

    if (parts.length === 0) return 'NebulaKit | Home'

    return ['NebulaKit', ...parts].join(' | ')
  } catch {
    return 'NebulaKit | React UI System'
  }
}

export const getComponentDescriptionByPath = (path: string) => {
  try {
    const parts = path.split('?')[0].split('/').filter(Boolean)

    // Must have at least: /core/<category>/<component>
    if (parts.length < 3) return DEFAULT_DESCRIPTION

    const [bundle, category, componentSlug] = parts

    // Only core/pro bundles have component metadata
    const isComponentBundle = bundle === 'core' || bundle === 'pro'
    if (!isComponentBundle) return DEFAULT_DESCRIPTION

    // Convert slug → PascalCase identifier
    const componentName = pascalCase(componentSlug)

    const componentMeta = (META as any)[componentName]
    if (!componentMeta) return DEFAULT_DESCRIPTION

    // Section (overview/examples/props)
    const section = parts[3] || 'overview'

    const description = componentMeta[section]?.description
    return description || DEFAULT_DESCRIPTION
  } catch {
    return DEFAULT_DESCRIPTION
  }
}
