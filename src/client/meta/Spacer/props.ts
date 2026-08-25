import { DEFAULT_SPACER_BLOCK_SIZE } from 'lib/components/core/Spacer/constants'
import { SpacerProps } from 'lib/index.core'
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'

export const SPACER_PROPS: Record<keyof SpacerProps, Prop> = {
  blockSize: {
    ...BOX_META.props.blockSize,
    defaultValue: String(DEFAULT_SPACER_BLOCK_SIZE),
    description: 'Controls the spacer vertical size.',
  },
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
}
