import { kebabCase } from 'change-case'

const modules = import.meta.glob('../../foundations/**/**/*.tsx', { eager: true })

export const FOUNDATION_COMPONENTS: Record<string, React.ComponentType> = {}

for (const path in modules) {
  const mod = modules[path] as any

  const match = path.match(/foundations\/([^/]+)\/([^/]+)\.tsx$/)
  if (!match) continue

  const [, folderName] = match
  const sectionKey = kebabCase(folderName)

  FOUNDATION_COMPONENTS[sectionKey] = mod.default
}
