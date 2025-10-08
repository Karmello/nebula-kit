import { ComponentMeta } from 'client/definitions'
import { TableBodyProps } from 'lib/components'

const TABLE_BODY_META: ComponentMeta<TableBodyProps> = {
  overview: {
    name: 'Table.Body',
    title: 'Main data rows of the table.',
    description: ['this slot can be used multiple times', 'expects Table.Row as children'],
    composedOf: ['Box'],
    rendersAs: ['tbody'],
    slots: ['Table.Row'],
  },
}

export { TABLE_BODY_META }
