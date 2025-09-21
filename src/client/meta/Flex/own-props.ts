import { ComponentMeta } from 'client/definitions'
import { FlexOwnProps } from 'lib/components/layout-base/Flex/definitions'
import { CssFlexAlignItems, CssFlexDirection, CssFlexJustifyContent, CssFlexWrap } from 'lib/definitions'

export default [
  {
    name: 'flexDirection',
    options: Object.values(CssFlexDirection),
    defaultValue: CssFlexDirection[0],
    isRequired: false,
    isResponsive: true,
    description: 'Sets the flow of flex items along the main axis.',
  },
  {
    name: 'flexWrap',
    options: Object.values(CssFlexWrap),
    defaultValue: CssFlexWrap[0],
    isRequired: false,
    isResponsive: true,
    description: 'Controls whether flex items stay on one line or wrap onto multiple lines.',
  },
  {
    name: 'justifyContent',
    options: Object.values(CssFlexJustifyContent),
    defaultValue: CssFlexJustifyContent[0],
    isRequired: false,
    isResponsive: true,
    description: 'Distributes flex items along the main axis.',
  },
  {
    name: 'alignItems',
    options: Object.values(CssFlexAlignItems),
    defaultValue: CssFlexAlignItems[0],
    isRequired: false,
    isResponsive: true,
    description: 'Aligns flex items along the cross axis.',
  },
  {
    name: 'gap',
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isRequired: false,
    isResponsive: true,
    description: 'Defines spacing between flex items on both axes.',
  },
  {
    name: 'rowGap',
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isRequired: false,
    isResponsive: true,
    description: 'Defines vertical spacing between rows of flex items.',
  },
  {
    name: 'columnGap',
    options: ['ScaleValue', 'CSS'],
    defaultValue: 'initial',
    isRequired: false,
    isResponsive: true,
    description: 'Defines horizontal spacing between columns of flex items.',
  },
] as ComponentMeta<FlexOwnProps>['ownProps']
