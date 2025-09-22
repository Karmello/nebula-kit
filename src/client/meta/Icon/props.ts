import { ComponentMeta } from 'client/definitions'
import { IconProps } from 'lib/components'
import { BoxIntent } from 'lib/components/base/Box/definitions'
import { DEFAULT_ICON_SIZE } from 'lib/components/elements/Icon/definitions'

const ICON_PROPS_META: ComponentMeta<IconProps>['props'] = {
  name: {
    options: ['IconName'],
    isRequired: true,
    description: 'Specifies which icon from the library to render.',
  },
  size: {
    options: ['ScaleValue'],
    defaultValue: String(DEFAULT_ICON_SIZE),
    description: "Sets the icon's width and height using the scale system.",
  },
  intent: {
    options: BoxIntent as unknown as string[],
    description: "Sets the icon's semantic color style from the design system.",
  },
}

export { ICON_PROPS_META }
