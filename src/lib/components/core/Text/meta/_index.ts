import { ComponentMeta } from 'client/definitions'

import { TEXT_TAGS, type TextProps } from '../definitions'
import { TEXT_PROPS_META } from './props'
import { TEXT_EXAMPLES_META } from './examples'

const TEXT_META: ComponentMeta<TextProps> = {
  overview: {
    bundle: 'core',
    title:
      'Foundational component for displaying and styling textual content that ensures consistent typography across the system.',
    features: [
      'renders semantic text elements with consistent typography',
      'provides common text styling and formatting options',
    ],
    composedOf: ['Box'],
    topLevelTags: TEXT_TAGS,
  },
  props: TEXT_PROPS_META,
  examples: TEXT_EXAMPLES_META,
  changelog: {
    '0.10.0': ['removed `scale` prop', 'added `wordBreak` prop', 'removed `WithIcon` dependency'],
    '0.9.0': ['added `fontSize` and `lineHeight` props for overriding typography-derived values directly'],
    '0.7.0': ['fixed text link display behavior inside table cells'],
    '0.2.3': ['released'],
  },
}

export default {
  Text: TEXT_META,
}
