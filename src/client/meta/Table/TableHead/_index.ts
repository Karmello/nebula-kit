import { ComponentMeta } from 'client/definitions'
import { TableHeadProps } from 'lib/components'

const TABLE_HEAD_META: ComponentMeta<TableHeadProps> = {
  overview: {
    name: 'Table.Head (Optional)',
    title: '...',
    description: ['...'],
    composedOf: ['Box'],
    rendersAs: ['thead'],
  },
}

export { TABLE_HEAD_META }
