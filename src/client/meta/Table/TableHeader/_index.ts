import { ComponentMeta } from 'client/definitions'
import { TableHeaderProps } from 'lib/components'

const TABLE_HEADER_META: ComponentMeta<TableHeaderProps> = {
  overview: {
    name: 'Table.Header?',
    title: 'Defines the column headers of the table.',
    description: ['expects Table.HeaderRow as children'],
    composedOf: ['Box'],
    rendersAs: ['thead'],
    slots: ['Table.HeaderRow'],
  },
}

export { TABLE_HEADER_META }
