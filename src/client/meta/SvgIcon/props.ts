import { ComponentMeta } from 'client/definitions'
import { SvgIconProps } from 'lib/components'
import { BoxIntent } from 'lib/components/base/Box/definitions'
import { DEFAULT_SVG_ICON_SIZE } from 'lib/components/elements/SvgIcon/definitions'

const SVG_ICON_PROPS_META: ComponentMeta<SvgIconProps>['props'] = {
  iconName: {
    name: 'iconName',
    options: ['IconName'],
    isRequired: true,
    isResponsive: false,
    description: 'Specifies which icon from the library to render.',
  },
  iconSize: {
    name: 'iconSize',
    options: ['ScaleValue'],
    defaultValue: String(DEFAULT_SVG_ICON_SIZE),
    isRequired: false,
    isResponsive: false,
    description: "Sets the icon's width and height using the scale system.",
  },
  iconIntent: {
    name: 'iconIntent',
    options: BoxIntent as unknown as string[],
    isRequired: false,
    isResponsive: false,
    description: 'Applies a semantic color style from the design system.',
  },
}

export default SVG_ICON_PROPS_META
