import { CompMetaRenderer } from 'client/components'
import { ComponentMeta } from 'lib/definitions'

export const FlexDocs = () => {
  let DATA: ComponentMeta

  try {
    DATA = require('../../../../meta/flex.json') as ComponentMeta
  } catch {
    DATA = null
  }

  return <CompMetaRenderer data={DATA} />
}
