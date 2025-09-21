import { ComponentMeta } from 'client/definitions'
import { FLEX_INHERITED_PROPS, FlexOwnProps } from 'lib/components/layout-base/Flex/definitions'

import props from './props'
import examples from './examples'

import FLEX_ITEM_META from './FlexItem/_index'

const FLEX_META: ComponentMeta<FlexOwnProps> = {
  overview: {
    description:
      'A layout component built on CSS Flexbox, providing a one-dimensional system for arranging children in a row or column.',
    role: [
      'provide a flexbox-based layout wrapper',
      'control flow, alignment, and wrapping of children',
      'manage spacing between items with gap properties',
    ],
    behavior: [
      'always applies display: flex',
      'uses Box internally to ensure consistent reset and baseline styles',
      'provides a <Flex.Item> subcomponent for per-child layout control',
    ],
    byDefault: [
      'renders as a <div> element',
      'arranges children in a row without wrapping',
      'does not apply any gap between children',
    ],
    examplesOfUse: [
      'arranging items in a one-dimensional row or column',
      'distributing space between elements with gaps or justification',
      'building responsive layouts that adapt across breakpoints',
    ],
    composedOf: FLEX_INHERITED_PROPS,
  },
  props,
  examples,
}

export default {
  Flex: FLEX_META,
  'Flex.Item': FLEX_ITEM_META,
}
