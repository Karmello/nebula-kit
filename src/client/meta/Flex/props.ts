import { ComponentMeta } from 'client/definitions'
import { FlexProps } from 'lib/components'

import {
  CSS_FLEX_ALIGN_ITEMS,
  CSS_FLEX_DIRECTION,
  CSS_FLEX_DISPLAY,
  CSS_FLEX_JUSTIFY_CONTENT,
  CSS_FLEX_WRAP,
} from 'lib/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const FLEX_PROPS_META: ComponentMeta<FlexProps>['props'] = {
  ...HTML_TAG_PROPS_META,
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
    description: 'Flex.Item or any React node.',
  },
  display: {
    options: Object.values(CSS_FLEX_DISPLAY),
    isResponsive: true,
    description: 'Switches between block and inline behavior.',
  },
  flexDirection: {
    options: Object.values(CSS_FLEX_DIRECTION),
    isResponsive: true,
    description: 'Sets the flow of children along the main axis.',
  },
  flexWrap: {
    options: Object.values(CSS_FLEX_WRAP),
    isResponsive: true,
    description: 'Controls whether children stay on one line or wrap onto multiple lines.',
  },
  justifyContent: {
    options: Object.values(CSS_FLEX_JUSTIFY_CONTENT),
    isResponsive: true,
    description: 'Distributes children along the main axis.',
  },
  alignItems: {
    options: Object.values(CSS_FLEX_ALIGN_ITEMS),
    isResponsive: true,
    description: 'Aligns children along the cross axis.',
  },
  gap: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Defines spacing between children on both axes.',
  },
  rowGap: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Defines vertical spacing between rows of children.',
  },
  columnGap: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Defines horizontal spacing between columns of children.',
  },
}

export { FLEX_PROPS_META }
