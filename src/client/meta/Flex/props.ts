import { ComponentMeta } from 'client/definitions'
import { FlexProps } from 'lib/components'

import {
  CSS_FLEX_ALIGN_ITEMS,
  CSS_FLEX_DIRECTION,
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
  flexDirection: {
    options: Object.values(CSS_FLEX_DIRECTION),
    defaultValue: CSS_FLEX_DIRECTION[0],
    isRequired: false,
    isResponsive: true,
    description: 'Sets the flow of children along the main axis.',
  },
  flexWrap: {
    options: Object.values(CSS_FLEX_WRAP),
    defaultValue: CSS_FLEX_WRAP[0],
    isRequired: false,
    isResponsive: true,
    description: 'Controls whether children stay on one line or wrap onto multiple lines.',
  },
  justifyContent: {
    options: Object.values(CSS_FLEX_JUSTIFY_CONTENT),
    defaultValue: CSS_FLEX_JUSTIFY_CONTENT[0],
    isRequired: false,
    isResponsive: true,
    description: 'Distributes children along the main axis.',
  },
  alignItems: {
    options: Object.values(CSS_FLEX_ALIGN_ITEMS),
    defaultValue: CSS_FLEX_ALIGN_ITEMS[0],
    isRequired: false,
    isResponsive: true,
    description: 'Aligns children along the cross axis.',
  },
  gap: {
    options: ['CSS'],
    defaultValue: 'initial',
    isRequired: false,
    isResponsive: true,
    description: 'Defines spacing between children on both axes.',
  },
  rowGap: {
    options: ['CSS'],
    defaultValue: 'initial',
    isRequired: false,
    isResponsive: true,
    description: 'Defines vertical spacing between rows of children.',
  },
  columnGap: {
    options: ['CSS'],
    defaultValue: 'initial',
    isRequired: false,
    isResponsive: true,
    description: 'Defines horizontal spacing between columns of children.',
  },
}

export { FLEX_PROPS_META }
