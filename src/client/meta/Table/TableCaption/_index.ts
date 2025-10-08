import { ComponentMeta } from 'client/definitions'
import { TableCaptionProps } from 'lib/components'

const TABLE_CAPTION_META: ComponentMeta<TableCaptionProps> = {
  overview: {
    name: 'Table.Caption?',
    title: 'Provides a descriptive title for the table.',
    description: ['gets rendered between the table head and body as a descriptive title'],
    composedOf: ['Box'],
    rendersAs: ['caption'],
  },
}

export { TABLE_CAPTION_META }
