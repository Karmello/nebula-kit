import { ComponentMeta } from 'client/definitions'

import { type TableHeaderProps } from '../../slots/TableHeader/definitions'
import { TABLE_HEADER_PROPS_META } from './props'

const TABLE_HEADER_META: ComponentMeta<TableHeaderProps> = {
  overview: {
    bundle: 'core',
    name: 'Table.Header?',
    title: 'Column headers of the table.',
    guidelines: ['expects Table.HeaderRow as children'],
    composedOf: ['Box'],
    topLevelTags: ['thead'],
    slots: ['Table.HeaderRow'],
  },
  props: TABLE_HEADER_PROPS_META,
}

export { TABLE_HEADER_META }
