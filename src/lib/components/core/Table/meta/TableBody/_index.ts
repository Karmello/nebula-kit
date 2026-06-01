import { ComponentMeta } from 'client/definitions'

import { type TableBodyProps } from '../../slots/TableBody/definitions'
import { TABLE_BODY_PROPS_META } from './props'

const TABLE_BODY_META: ComponentMeta<TableBodyProps> = {
  overview: {
    bundle: 'core',
    name: 'Table.Body',
    title: 'Main data rows of the table.',
    guidelines: ['expects Table.Row as children', 'this slot can be used multiple times'],
    composedOf: ['Box'],
    topLevelTags: ['tbody'],
    slots: ['Table.Row'],
  },
  props: TABLE_BODY_PROPS_META,
}

export { TABLE_BODY_META }
