import { ComponentMeta } from 'client/definitions'

import { type TableCaptionProps } from '../../slots/TableCaption/definitions'
import { TABLE_CAPTION_PROPS_META } from './props'

const TABLE_CAPTION_META: ComponentMeta<TableCaptionProps> = {
  overview: {
    bundle: 'core',
    name: 'Table.Caption?',
    title: 'Provides a descriptive title for the table.',
    features: ['gets rendered at the top of the table as a descriptive title'],
    composedOf: ['Box'],
    topLevelTags: ['caption'],
  },
  props: TABLE_CAPTION_PROPS_META,
}

export { TABLE_CAPTION_META }
