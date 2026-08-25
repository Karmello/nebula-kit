import {
  DEFAULT_DIVIDER_INTENT,
  DEFAULT_DIVIDER_MARGIN_BLOCK,
} from 'lib/components/core/Divider/constants'
import { DividerProps } from 'lib/index.core'
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'

export const DIVIDER_PROPS: Record<keyof DividerProps, Prop> = {
  color: BOX_META.props.color,
  elevated: BOX_META.props.elevated,
  intent: {
    ...BOX_META.props.intent,
    defaultValue: String(DEFAULT_DIVIDER_INTENT),
  },
  marginBlock: {
    ...BOX_META.props.marginBlock,
    defaultValue: String(DEFAULT_DIVIDER_MARGIN_BLOCK),
  },
  marginBottom: BOX_META.props.marginBottom,
  marginTop: BOX_META.props.marginTop,
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
}
