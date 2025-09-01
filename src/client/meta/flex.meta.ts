import { FlexOwnProps } from 'lib/components'

import { ComponentMeta, CssFlexAlign, CssFlexDirection, CssFlexJustify, CssFlexWrap } from 'lib/definitions'

enum PropCategory {
  layout = 'Layout',
  alignment = 'Alignment',
  spacing = 'Spacing',
}

const FLEX_META: ComponentMeta<FlexOwnProps> = {
  name: 'Flex',
  description:
    'Flex is a layout component that arranges its children using CSS flexbox. It provides a consistent API for direction, wrapping, alignment, and spacing, so you can build responsive row or column layouts without writing raw flex styles. Use Flex when you need predictable alignment and gaps between elements, or as the foundation for higher-level layout primitives.',
  propsInfo: 'Flex extends Box, so it accepts all Box props in addition to the flex-specific ones below.',
  props: [
    {
      category: PropCategory.layout,
      name: 'flexDirection',
      options: Object.values(CssFlexDirection),
      defaultValue: CssFlexDirection.row,
      isRequired: false,
      isResponsive: true,
      description: 'Sets the flow of flex items along the main axis.',
    },
    {
      category: PropCategory.layout,
      name: 'flexWrap',
      options: Object.values(CssFlexWrap),
      defaultValue: CssFlexWrap.nowrap,
      isRequired: false,
      isResponsive: true,
      description: 'Controls whether flex items stay on one line or wrap onto multiple lines.',
    },
    {
      category: PropCategory.alignment,
      name: 'justifyContent',
      options: Object.values(CssFlexJustify),
      defaultValue: CssFlexJustify['flex-start'],
      isRequired: false,
      isResponsive: true,
      description: 'Distributes flex items along the main axis.',
    },
    {
      category: PropCategory.alignment,
      name: 'alignItems',
      options: Object.values(CssFlexAlign),
      defaultValue: CssFlexAlign['flex-start'],
      isRequired: false,
      isResponsive: true,
      description: 'Aligns flex items along the cross axis.',
    },
    {
      category: PropCategory.spacing,
      name: 'gap',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'initial',
      isRequired: false,
      isResponsive: true,
      description: 'Defines spacing between flex items on both axes.',
    },
    {
      category: PropCategory.spacing,
      name: 'rowGap',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'initial',
      isRequired: false,
      isResponsive: true,
      description: 'Defines vertical spacing between rows of flex items.',
    },
    {
      category: PropCategory.spacing,
      name: 'columnGap',
      options: ['ScaleValue', 'CSS'],
      defaultValue: 'initial',
      isRequired: false,
      isResponsive: true,
      description: 'Defines horizontal spacing between columns of flex items.',
    },
  ],
}

export default FLEX_META
