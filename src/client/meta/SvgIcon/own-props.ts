import { ComponentMeta } from 'client/definitions'
import { SvgIconProps } from 'lib/components'
import { BoxIntent } from 'lib/components/base/Box/definitions'
import { DEFAULT_SVG_ICON_SIZE } from 'lib/components/elements/SvgIcon/definitions'

export default [
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
] as ComponentMeta<SvgIconProps>['ownProps']
