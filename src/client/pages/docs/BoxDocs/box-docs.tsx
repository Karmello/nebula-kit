import { CompMetaRenderer } from 'client/components'
import { ComponentMeta } from 'lib/definitions'

export const BoxDocs = () => {
  let DATA: ComponentMeta

  try {
    DATA = require('../../../../meta/box.json') as ComponentMeta
  } catch {
    DATA = null
  }

  return <CompMetaRenderer data={DATA} />
}
