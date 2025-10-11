import { ComponentMeta } from 'client/definitions'
import { FlexProps } from 'lib/components/layout-base/Flex/definitions'
import { CssFlexAlignItems, CssFlexDirection, CssFlexJustifyContent, CssFlexWrap } from 'lib/definitions'
import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const FLEX_PROPS_META: ComponentMeta<FlexProps>['props'] = {
  ...HTML_TAG_PROPS_META,
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
    description: 'Flex.Item or any React node.',
  },
  flexDirection: {
    options: Object.values(CssFlexDirection),
    defaultValue: CssFlexDirection[0],
    isRequired: false,
    isResponsive: true,
    description: 'Sets the flow of items along the main axis.',
  },
  flexWrap: {
    options: Object.values(CssFlexWrap),
    defaultValue: CssFlexWrap[0],
    isRequired: false,
    isResponsive: true,
    description: 'Controls whether items stay on one line or wrap onto multiple lines.',
  },
  justifyContent: {
    options: Object.values(CssFlexJustifyContent),
    defaultValue: CssFlexJustifyContent[0],
    isRequired: false,
    isResponsive: true,
    description: 'Distributes items along the main axis.',
  },
  alignItems: {
    options: Object.values(CssFlexAlignItems),
    defaultValue: CssFlexAlignItems[0],
    isRequired: false,
    isResponsive: true,
    description: 'Aligns items along the cross axis.',
  },
  gap: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isRequired: false,
    isResponsive: true,
    description: 'Defines spacing between items on both axes.',
  },
  rowGap: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isRequired: false,
    isResponsive: true,
    description: 'Defines vertical spacing between rows of items.',
  },
  columnGap: {
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isRequired: false,
    isResponsive: true,
    description: 'Defines horizontal spacing between columns of items.',
  },
}

export { FLEX_PROPS_META }
