import { CORE_DATA, PRO_DATA } from '../../../../src/client/pages/app/ComponentsBundlePage/definitions'

export const generateBundleRegistry = () => {
  const lines: string[] = []

  lines.push('# NebulaKit Component Registry')
  lines.push('')

  lines.push('## Core Bundle Components')
  lines.push('')

  for (const comp of CORE_DATA) {
    lines.push(`- ${comp.name}`)
  }

  lines.push('')
  lines.push('## Pro Bundle Components')
  lines.push('')

  for (const comp of PRO_DATA) {
    lines.push(`- ${comp.name}`)
  }

  return lines.join('\n')
}
