import { ComponentMeta, DOCS_CSS_LABEL } from 'client/definitions'
import { FlexProps } from 'lib/components'

import {
  CSS_FLEX_ALIGN_CONTENT,
  CSS_FLEX_ALIGN_ITEMS,
  CSS_FLEX_DIRECTION,
  CSS_FLEX_DISPLAY,
  CSS_FLEX_JUSTIFY_CONTENT,
  CSS_FLEX_WRAP,
  TSHIRT_SIZES,
} from 'lib/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const FLEX_PROPS_META: ComponentMeta<FlexProps>['props'] = {
  ...HTML_TAG_PROPS_META,
  alignContent: {
    options: CSS_FLEX_ALIGN_CONTENT,
    isResponsive: true,
    description: 'Aligns rows of items along the cross axis when wrapping is enabled.',
    link: true,
  },
  alignItems: {
    options: CSS_FLEX_ALIGN_ITEMS,
    isResponsive: true,
    description: 'Aligns items within each row along the cross axis.',
    link: true,
  },
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
    description: 'Flex.Item or any React node.',
  },
  columnGap: {
    options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
    isResponsive: true,
    description: 'Defines horizontal spacing between columns of children.',
    link: true,
  },
  display: {
    options: CSS_FLEX_DISPLAY,
    isResponsive: true,
    description: 'Switches between block and inline behavior.',
    link: true,
  },
  flexDirection: {
    options: CSS_FLEX_DIRECTION,
    isResponsive: true,
    description: 'Sets the flow of children along the main axis.',
    link: true,
  },
  flexWrap: {
    options: CSS_FLEX_WRAP,
    isResponsive: true,
    description: 'Controls whether children stay on one line or wrap onto multiple lines.',
    link: true,
  },
  gap: {
    options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
    isResponsive: true,
    description: 'Defines spacing between children on both axes.',
    link: true,
  },
  justifyContent: {
    options: CSS_FLEX_JUSTIFY_CONTENT,
    isResponsive: true,
    description: 'Distributes children along the main axis.',
    link: true,
  },
  rowGap: {
    options: [...TSHIRT_SIZES, DOCS_CSS_LABEL],
    isResponsive: true,
    description: 'Defines vertical spacing between rows of children.',
    link: true,
  },
}

export { FLEX_PROPS_META }
