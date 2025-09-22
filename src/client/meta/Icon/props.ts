import { ComponentMeta } from 'client/definitions'
import { IconProps } from 'lib/components'
import { BoxIntent } from 'lib/components/base/Box/definitions'
import { DEFAULT_ICON_SIZE } from 'lib/components/elements/Icon/definitions'

const ICON_PROPS_META: ComponentMeta<IconProps>['props'] = {
  iconName: {
    options: ['IconName'],
    isRequired: true,
    isResponsive: false,
    description: 'Specifies which icon from the library to render.',
  },
  iconSize: {
    options: ['ScaleValue'],
    defaultValue: String(DEFAULT_ICON_SIZE),
    isRequired: false,
    isResponsive: false,
    description: "Sets the icon's width and height using the scale system.",
  },
  iconIntent: {
    options: BoxIntent as unknown as string[],
    isRequired: false,
    isResponsive: false,
    description: "Sets the icon's semantic color style from the design system.",
  },
}

export { ICON_PROPS_META }
