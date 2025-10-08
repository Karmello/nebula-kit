import { ComponentMeta } from 'client/definitions'
import { TableBodyProps } from 'lib/components'

const TABLE_BODY_META: ComponentMeta<TableBodyProps> = {
  overview: {
    name: 'Table.Body',
    title: '...',
    description: ['...'],
    composedOf: ['Box'],
    rendersAs: ['tbody'],
  },
}

export { TABLE_BODY_META }
