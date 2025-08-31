import { useDocsPageStore } from 'client/store'
import { CodeSnippet } from 'client/components'
import { ComponentUsageMeta } from 'lib/definitions'
import { Section } from 'lib/components'

export const CompUsagePage = () => {
  const { itemKey } = useDocsPageStore()

  let USAGE_META: ComponentUsageMeta

  try {
    USAGE_META = require(`../../../../../docs/${itemKey}/${itemKey}-usage.meta.ts`).default
  } catch {
    USAGE_META = null
  }

  if (!USAGE_META) {
    return null
  }

  return USAGE_META.map((example, i) => (
    <Section key={i} heading={example.heading} headingProps={{ typography: 'h6' }} hideDivider>
      <CodeSnippet code={example.code} />
    </Section>
  ))
}
