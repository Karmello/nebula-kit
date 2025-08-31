import { useDocsPageStore } from 'client/store'
import { CodeSnippet } from 'client/components'
import { ComponentUsageMeta } from 'lib/definitions'

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

  return USAGE_META.map((example, i) => <CodeSnippet key={i} code={example.code} />)
}
