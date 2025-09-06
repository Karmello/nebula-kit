import { SvgIcon, SvgIconProps } from 'lib/components'
import { BoxIntent, ComponentMeta, DEFAULT_BOX_INTENT, DEFAULT_SVG_ICON_SIZE } from 'lib/definitions'

export default {
  overview: {
    name: 'SvgIcon',
    description:
      'SvgIcon is a wrapper that renders an SVG from the icon set by name and applies system styles.',
    responsibilities: ['resolve icon by name', 'apply sizing and color'],
    characteristics: ['name is required to resolve and render the correct icon'],
    defaultBehavior: [
      'size defaults to 8 (16px) for standard readability',
      'intent defaults to neutral for balanced, non-emphasized color',
    ],
    useCases: [
      'render an icon on its own when only the symbol is needed',
      'compose new components that require direct icon control',
      'access the raw SVG for custom sizing or color overrides',
    ],
  },
  props: [
    {
      category: '',
      name: 'iconName',
      options: ['IconName'],
      defaultValue: '',
      isRequired: true,
      isResponsive: false,
      description: 'Specifies which icon from the library to render.',
    },
    {
      category: '',
      name: 'iconSize',
      options: ['ScaleValue'],
      defaultValue: DEFAULT_SVG_ICON_SIZE,
      isRequired: false,
      isResponsive: false,
      description: "Sets the icon's width and height using the scale system.",
    },
    {
      category: '',
      name: 'iconIntent',
      options: BoxIntent,
      defaultValue: DEFAULT_BOX_INTENT,
      isRequired: false,
      isResponsive: false,
      description: 'Applies a semantic color style from the design system.',
    },
  ],
  examples: [
    {
      description: 'Renders the search icon at the default size 8 (16px) with neutral color.',
      jsx: <SvgIcon iconName="search" />,
    },
    {
      description: 'Renders the search icon at size 20 (40px) with the default neutral color.',
      jsx: <SvgIcon iconName="search" iconSize={20} />,
    },
    {
      description: 'Renders the search icon at size 20 (40px) with the primary color intent.',
      jsx: <SvgIcon iconName="search" iconSize={20} iconIntent="primary" />,
    },
  ],
} as ComponentMeta<SvgIconProps>
