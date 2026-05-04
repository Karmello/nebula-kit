import { addSection } from './add-section'
import { stringifyList } from './stringify-list'
import { generateProps } from './generate-props'
import { generateExamples } from './generate-examples'

export const generateDoc = (name: string, metaGroup: any) => {
  const rootMeta = metaGroup[name]
  if (!rootMeta) return ''

  const lines: string[] = [`# ${name}`, '']

  const renderComponent = (componentName: string, meta: any, isSub = false) => {
    const { overview, props, examples, changelog } = meta

    if (isSub) {
      lines.push(`\n---\n`)
      lines.push(`## ${componentName}`, '')
    }

    if (overview?.bundle && !isSub) {
      lines.push(`Bundle: ${overview.bundle}`, '')
    }

    addSection(lines, 'Title', overview?.title)
    addSection(lines, 'Description', overview?.description)
    addSection(lines, 'Features', stringifyList(overview?.features))
    addSection(lines, 'Composed of', stringifyList(overview?.composedOf))
    addSection(lines, 'Root tags', stringifyList(overview?.topLevelTags))
    addSection(lines, 'Slots', stringifyList(overview?.slots))
    addSection(lines, 'Hooks', stringifyList(overview?.hooks))
    addSection(lines, 'Props', generateProps(props))
    addSection(lines, 'Examples', generateExamples(examples))

    addSection(
      lines,
      'Changelog',
      changelog
        ? Object.entries(changelog)
            .map(([version, changes]) => [`### ${version}`, '', stringifyList(changes as string[])].join('\n'))
            .join('\n\n')
        : undefined
    )
  }

  // 👉 render root
  renderComponent(name, rootMeta)

  // 👉 render slots (everything else)
  for (const [key, meta] of Object.entries(metaGroup)) {
    if (key === name) continue
    renderComponent(key, meta, true)
  }

  return lines.join('\n').trimEnd() + '\n'
}
