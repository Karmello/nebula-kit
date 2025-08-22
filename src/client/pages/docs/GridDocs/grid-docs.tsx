import { CompMetaRenderer } from 'client/components'
import { ComponentMeta } from 'lib/definitions'

export const GridDocs = () => {
  let DATA: ComponentMeta

  try {
    DATA = require('../../../../meta/grid.json') as ComponentMeta
  } catch {
    DATA = null
  }

  return <CompMetaRenderer data={DATA} />
}
