import { ComponentMeta } from 'client/definitions'
import { BoxIntent, DEFAULT_SVG_ICON_SIZE, SvgIcon, SvgIconProps } from 'lib/components'

const SVG_ICON_META: ComponentMeta<SvgIconProps> = {
  overview: {
    description:
      'SvgIcon is a wrapper that renders an SVG from the icon set by name and applies system styles.',
    role: ['resolve icon by name', 'apply sizing and color'],
    behavior: ['name is required to resolve and render the correct icon'],
    byDefault: [
      'size defaults to 8 (16px) for standard readability',
      'intent defaults to neutral for balanced, non-emphasized color',
    ],
    examplesOfUse: [
      'render an icon on its own when only the symbol is needed',
      'compose new components that require direct icon control',
      'access the raw SVG for custom sizing or color overrides',
    ],
  },
  ownProps: [
    {
      name: 'iconName',
      options: ['IconName'],
      isRequired: true,
      isResponsive: false,
      description: 'Specifies which icon from the library to render.',
    },
    {
      name: 'iconSize',
      options: ['ScaleValue'],
      defaultValue: String(DEFAULT_SVG_ICON_SIZE),
      isRequired: false,
      isResponsive: false,
      description: "Sets the icon's width and height using the scale system.",
    },
    {
      name: 'iconIntent',
      options: BoxIntent as unknown as string[],
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
}

export default {
  SvgIcon: SVG_ICON_META,
}
