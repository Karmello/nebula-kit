import { DEFAULT_SPACER_BLOCK_SIZE } from 'lib/components/core/Spacer/constants'
import { SpacerProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

export const SPACER_PROPS: Record<keyof SpacerProps, DocProp> = {
  elemRef: {
    options: ['RefObject'],
    description: 'Reference to the element.',
  },
  elemAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the element.',
  },
  // size
  blockSize: {
    options: ['string'],
    isResponsive: true,
    link: true,
    defaultValue: String(DEFAULT_SPACER_BLOCK_SIZE),
    description: 'Controls the spacer vertical size.',
    group: 'size',
  },
}
