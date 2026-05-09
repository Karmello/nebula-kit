import { ComponentMeta } from 'client/definitions'
import { TableHeaderRowProps } from 'lib/components'

import { TABLE_HEADER_ROW_PROPS_META } from './props'

const TABLE_HEADER_ROW_META: ComponentMeta<TableHeaderRowProps> = {
  overview: {
    bundle: 'core',
    name: 'Table.HeaderRow?',
    title: 'Represents a row within Table.Head for organizing header cells.',
    guidelines: ["should be use within Table.Head to group header cells and define the table's column labels."],
    composedOf: ['Box'],
    topLevelTags: ['tr'],
    slots: ['Table.HeaderCell'],
  },
  props: TABLE_HEADER_ROW_PROPS_META,
}

export { TABLE_HEADER_ROW_META }
