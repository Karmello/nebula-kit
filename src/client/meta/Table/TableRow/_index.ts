import { ComponentMeta } from 'client/definitions'
import { TableRowProps } from 'lib/components'

import { TABLE_ROW_PROPS_META } from './props'

const TABLE_ROW_META: ComponentMeta<TableRowProps> = {
  overview: {
    bundle: 'core',
    name: 'Table.Row',
    title: 'Represents a single row within the table structure.',
    features: ['should be placed inside Table.Body or Table.Footer to define individual data rows'],
    composedOf: ['Box'],
    topLevelTags: ['tr'],
    slots: ['Table.Cell', 'Table.HeaderCell'],
  },
  props: TABLE_ROW_PROPS_META,
}

export { TABLE_ROW_META }
