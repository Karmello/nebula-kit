import { kebabCase } from 'change-case'

export const FOUNDATION_COMPONENTS: Record<string, React.ComponentType> = {}

let initialized = false

export const loadFoundationPageModules = () => {
  if (initialized) return
  initialized = true

  // HARD STOP for SSR
  if (typeof window === 'undefined') {
    return
  }

  const modules = import.meta.glob('../../foundations/**/**/*.tsx', { eager: true })

  for (const path in modules) {
    const mod = modules[path] as any

    const match = path.match(/foundations\/([^/]+)\/([^/]+)\.tsx$/)
    if (!match) continue

    const [, folderName] = match
    const sectionKey = kebabCase(folderName)

    FOUNDATION_COMPONENTS[sectionKey] = mod.default
  }
}
