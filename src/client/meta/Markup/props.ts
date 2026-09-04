import { MarkupProps } from 'lib/index.pro'
import type { DocProp } from 'client/definitions'

export const MARKUP_PROPS: Record<keyof MarkupProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description:
      'Text content rendered and processed for supported inline markup. Direct Text children are recommended.',
  },
  tagAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the root tag.',
  },
  tagRef: {
    options: ['RefObject'],
    description: 'Reference to the root HTML tag.',
  },
}
