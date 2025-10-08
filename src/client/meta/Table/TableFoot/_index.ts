import { ComponentMeta } from 'client/definitions'
import { TableFootProps } from 'lib/components'

const TABLE_FOOT_META: ComponentMeta<TableFootProps> = {
  overview: {
    name: 'Table.Foot (Optional)',
    title: '...',
    description: ['...'],
    composedOf: ['Box'],
    rendersAs: ['tfoot'],
  },
}

export { TABLE_FOOT_META }
