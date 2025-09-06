import { SvgIcon, SvgIconProps } from 'lib/components'
import { BoxIntent, ComponentMeta, DEFAULT_BOX_INTENT, DEFAULT_SVG_ICON_SIZE } from 'lib/definitions'
import { ICON_NAMES } from 'lib/icons'

export default {
  overview: {
    name: 'SvgIcon',
    description:
      'SvgIcon is a wrapper that renders an SVG from the icon set by name and applies system styles.',
    responsibilities: ['resolve icon by name', 'apply sizing and color'],
    useCases: [
      'render an icon on its own when only the symbol is needed',
      'compose new components that require direct icon control',
      'access the raw SVG for custom sizing or color overrides',
    ],
    defaultBehavior: [
      'name is required to resolve and render the correct icon',
      'size defaults to 8 (16 px) for standard readability',
      'intent defaults to neutral for balanced, non-emphasized color',
    ],
  },
  props: [
    {
      category: '',
      name: 'name',
      options: ICON_NAMES as unknown as string[],
      defaultValue: '',
      isRequired: false,
      isResponsive: false,
      description: 'Specifies which icon from the library to render.',
    },
    {
      category: '',
      name: 'size',
      options: ['ScaleValue'],
      defaultValue: DEFAULT_SVG_ICON_SIZE,
      isRequired: false,
      isResponsive: false,
      description: "Sets the icon's width and height using the scale system.",
    },
    {
      category: '',
      name: 'intent',
      options: BoxIntent,
      defaultValue: DEFAULT_BOX_INTENT,
      isRequired: false,
      isResponsive: false,
      description: 'Applies a semantic color style from the design system.',
    },
  ],
  examples: [
    {
      description: 'Renders the search icon at the default size 8 (16 px) with neutral color.',
      jsx: <SvgIcon name="search" />,
    },
    {
      description: 'Renders the search icon at size 20 (40 px) with the default neutral color.',
      jsx: <SvgIcon name="search" size={20} />,
    },
    {
      description: 'Renders the search icon at size 20 (40 px) with the primary color intent.',
      jsx: <SvgIcon name="search" size={20} intent="primary" />,
    },
  ],
} as ComponentMeta<SvgIconProps>
