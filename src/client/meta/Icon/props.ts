import { ComponentMeta } from 'client/definitions'
import { IconProps } from 'lib/components'
import { BoxIntent } from 'lib/components/base/Box/definitions'
import { DEFAULT_ICON_INTENT, DEFAULT_ICON_SIZE } from 'lib/components/elements/Icon/definitions'

const ICON_PROPS_META: ComponentMeta<IconProps>['props'] = {
  name: {
    options: ['IconName'],
    isRequired: true,
    description: 'Name of the icon to render.',
  },
  size: {
    options: ['ScaleValue'],
    defaultValue: String(DEFAULT_ICON_SIZE),
    description: 'Size of the icon as a system scale value.',
  },
  intent: {
    options: BoxIntent as unknown as string[],
    defaultValue: String(DEFAULT_ICON_INTENT),
    description: 'System semantic color style for the icon.',
  },
}

export { ICON_PROPS_META }
