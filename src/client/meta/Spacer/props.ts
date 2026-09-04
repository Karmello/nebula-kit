import { DEFAULT_SPACER_BLOCK_SIZE } from 'lib/components/core/Spacer/constants'
import { SpacerProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

export const SPACER_PROPS: Record<keyof SpacerProps, DocProp> = {
  blockSize: {
    options: ['string'],
    isResponsive: true,
    link: true,
    defaultValue: String(DEFAULT_SPACER_BLOCK_SIZE),
    description: 'Controls the spacer vertical size.',
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
