import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import {
  DEFAULT_REVEAL_INTENT,
  DEFAULT_REVEAL_SCALE,
  REVEAL_TAGS,
} from 'lib/components/core/Reveal/constants'
import { TSHIRT_SIZES } from 'lib/constants'
import { RevealProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

export const REVEAL_PROPS: Record<keyof RevealProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content animated.',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
  },
  disabled: {
    options: ['boolean'],
    description: 'Disables the component and its interactions.',
  },
  intent: {
    options: BOX_INTENTS,
    defaultValue: String(DEFAULT_REVEAL_INTENT),
    description: "Color tone applied to the component's main color.",
  },
  label: {
    options: ['string'],
    isRequired: true,
    description: 'Text displayed on the reveal button.',
  },
  scale: {
    options: TSHIRT_SIZES,
    defaultValue: DEFAULT_REVEAL_SCALE,
    description: 'Size of the reveal button.',
  },
  tag: {
    options: REVEAL_TAGS,
    defaultValue: 'div',
    description: 'The HTML tag to be rendered as the container.',
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
