import { ComponentMeta } from 'client/definitions'
import { TableHeaderProps } from 'lib/components'

import { TABLE_HEADER_PROPS_META } from './props'

const TABLE_HEADER_META: ComponentMeta<TableHeaderProps> = {
  overview: {
    name: 'Table.Header?',
    title: 'Column headers of the table.',
    features: ['expects Table.HeaderRow as children'],
    composedOf: ['Box'],
    topLevelTags: ['thead'],
    slots: ['Table.HeaderRow'],
  },
  props: TABLE_HEADER_PROPS_META,
}

export { TABLE_HEADER_META }
