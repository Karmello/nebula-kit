import { DEFAULT_REVEAL_INTENT, DEFAULT_REVEAL_SCALE } from 'lib/components/core/Reveal/constants'
import { RevealProps } from 'lib/index.core'
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'
import { BUTTON_META } from '../Button'
import { RESIZE_META } from '../Resize'

export const REVEAL_PROPS: Record<keyof RevealProps, Prop> = {
  children: {
    ...RESIZE_META.props.children,
    isRequired: true,
  },
  color: BUTTON_META.props.color,
  disabled: BUTTON_META.props.disabled,
  intent: {
    ...BOX_META.props.intent,
    defaultValue: String(DEFAULT_REVEAL_INTENT),
  },
  label: {
    options: ['string'],
    isRequired: true,
    description: 'Text displayed on the reveal button.',
  },
  scale: {
    ...BUTTON_META.props.scale,
    defaultValue: DEFAULT_REVEAL_SCALE,
    description: 'Size of the reveal button.',
  },
  tag: BOX_META.props.tag,
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
}
