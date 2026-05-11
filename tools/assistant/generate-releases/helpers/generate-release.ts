import meta from '../../../../src/client/meta'
import { RELEASE_INFO } from '../../../../src/client/definitions/release'

export const generateRelease = (version: string, info: typeof RELEASE_INFO) => {
  const release = info[version]
  if (!release) return ''

  const lines: string[] = [`# v${version}`, '']

  // date
  if (release.timestamp) {
    const date = new Date(release.timestamp).toDateString()
    lines.push(date, '')
  }

  // =========================
  // MAIN (global notes)
  // =========================

  const changelog = release.changelog

  if (changelog?.main?.length) {
    for (const item of changelog.main) {
      lines.push(`- ${item}`)
    }
    lines.push('')
  }

  // =========================
  // COMPONENT NOTES (core/pro)
  // =========================

  const notes: { core: Record<string, string[]>; pro: Record<string, string[]> } = {
    core: {},
    pro: {},
  }

  for (const key of Object.keys(meta)) {
    const componentMeta = meta[key][key]
    const componentChangelog = componentMeta.changelog
    const bundle = componentMeta.overview.bundle

    if (componentChangelog && componentChangelog[version]) {
      notes[bundle][key] = componentChangelog[version]
    }
  }

  const hasCore = Object.keys(notes.core).length
  const hasPro = Object.keys(notes.pro).length

  // =========================
  // CORE
  // =========================

  if (hasCore) {
    lines.push('## Core', '')

    // optional global core notes
    if (changelog?.core?.length) {
      for (const item of changelog.core) {
        lines.push(`- ${item}`)
      }
      lines.push('')
    }

    for (const componentName of Object.keys(notes.core)) {
      lines.push(`### ${componentName}`, '')

      for (const item of notes.core[componentName]) {
        lines.push(`- ${item}`)
      }

      lines.push('')
    }
  }

  // =========================
  // PRO
  // =========================

  if (hasPro) {
    lines.push('## Pro', '')

    if (changelog?.pro?.length) {
      for (const item of changelog.pro) {
        lines.push(`- ${item}`)
      }
      lines.push('')
    }

    for (const componentName of Object.keys(notes.pro)) {
      lines.push(`### ${componentName}`, '')

      for (const item of notes.pro[componentName]) {
        lines.push(`- ${item}`)
      }

      lines.push('')
    }
  }

  return lines.join('\n').trimEnd() + '\n'
}
