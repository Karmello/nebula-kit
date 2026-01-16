import { ComponentMeta } from 'client/definitions'
import { TableBodyProps } from 'lib/components'

import { TABLE_BODY_PROPS_META } from './props'

const TABLE_BODY_META: ComponentMeta<TableBodyProps> = {
  overview: {
    name: 'Table.Body',
    title: 'Main data rows of the table.',
    features: ['this slot can be used multiple times', 'expects Table.Row as children'],
    composedOf: ['Box'],
    topLevelTags: ['tbody'],
    slots: ['Table.Row'],
  },
  props: TABLE_BODY_PROPS_META,
}

export { TABLE_BODY_META }
