import {
  DEFAULT_REVEAL_INTENT,
  DEFAULT_REVEAL_SCALE,
  REVEAL_TAGS,
} from 'lib/components/core/Reveal/constants'
import { RevealProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'
import { BUTTON_META } from '../Button'
import { RESIZE_META } from '../Resize'
import { REVEAL_CHANGELOG } from './changelog'
import { REVEAL_EXAMPLES } from './examples'

export const REVEAL_META = {
  overview: {
    bundle: 'core',
    title: 'Disclosure component for toggling expandable content.',
    features: [
      'provides a labeled control for toggling content visibility',
      'animates expand and collapse using measured height for smooth transitions',
    ],
    exposedTags: REVEAL_TAGS,
    composedOf: ['Box', 'Text', 'Icon', 'Rotate', 'Resize'],
  },
  props: {
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
  },
  examples: REVEAL_EXAMPLES,
  changelog: REVEAL_CHANGELOG,
} satisfies ComponentMeta<RevealProps>
