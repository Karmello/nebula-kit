import { ComponentMeta } from 'client/definitions'
import { TableCaptionProps } from 'lib/components'

import { TABLE_CAPTION_PROPS_META } from './props'

const TABLE_CAPTION_META: ComponentMeta<TableCaptionProps> = {
  overview: {
    name: 'Table.Caption?',
    title: 'Provides a descriptive title for the table.',
    description: ['gets rendered at the top of the table as a descriptive title'],
    composedOf: ['Box'],
    topLevelTags: ['caption'],
  },
  props: TABLE_CAPTION_PROPS_META,
}

export { TABLE_CAPTION_META }
