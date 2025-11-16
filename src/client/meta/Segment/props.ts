import { ComponentMeta } from 'client/definitions'
import { SegmentProps } from 'lib/components/layout/Segment'
import { SEGMENT_DIRECTIONS } from 'lib/components/layout/Segment/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BUTTON_PROPS_META } from '../Button/props'
import { BOX_PROPS_META } from '../Box/props'

const SEGMENT_PROPS_META: ComponentMeta<SegmentProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['ReactNode'],
    isRequired: true,
    description: 'Any component that renders Box as the root element.',
  },
  color: {
    ...BOX_PROPS_META.color,
    description: 'Color applied to all children at once.',
  },
  direction: {
    options: Object.values(SEGMENT_DIRECTIONS),
    defaultValue: SEGMENT_DIRECTIONS[0],
    isRequired: false,
    isResponsive: true,
    description: 'Controls whether children are arranged horizontally or vertically.',
  },
  intent: {
    ...BOX_PROPS_META.intent,
    description: 'Tone level applied to all children at once.',
  },
  size: {
    ...BUTTON_PROPS_META.size,
    description: 'Size applied to all children at once.',
  },
  stretch: {
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: true,
    description: 'Makes all children expand to fill the available space evenly.',
  },
  tag: HTML_TAG_PROPS_META.tag,
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  variant: {
    ...BOX_PROPS_META.variant,
    description: 'Visual style variant applied to all children at once.',
  },
}

export { SEGMENT_PROPS_META }
