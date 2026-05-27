import { ComponentMeta } from 'client/definitions'
import { BUTTON_TAGS, type ButtonProps } from 'lib/components/core/Button/definitions'

import { BUTTON_PROPS_META } from './props'
import { BUTTON_EXAMPLES_META } from './examples'

const BUTTON_META: ComponentMeta<ButtonProps> = {
  overview: {
    bundle: 'core',
    title: 'Interactive control for triggering actions with consistent semantics, layout and visual states.',
    features: [
      'provides a consistent, accessible trigger for user actions',
      'handles interactive states: hover, active, focus, disabled, loading',
      'supports first-class icon composition, including custom SVG icons',
      'supports full-width layout to span the entire container',
    ],
    composedOf: ['ActionSurface', 'Text', 'Loader', 'WithIcon', 'Flex'],
    topLevelTags: BUTTON_TAGS,
  },
  props: BUTTON_PROPS_META,
  examples: BUTTON_EXAMPLES_META,
  changelog: {
    '0.10.0': ['removed `justifyContent` prop', 'removed `textAlign` prop', 'added `align` prop'],
    '0.9.0': ['changed `surface` prop to `elevated`'],
    '0.8.0': ['exposed `selected` prop', 'changed `elevated` prop to `surface`'],
    '0.7.0': ['exposed `interactive` prop'],
    '0.4.0': ['added `onClick` prop'],
    '0.2.3': ['released'],
  },
}

export default {
  Button: BUTTON_META,
}
