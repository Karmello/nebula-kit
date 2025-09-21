import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_WITH_ICON_ICON_POSITION,
  IconPosition,
  WithIconOwnProps,
} from 'lib/components/utility/WithIcon/definitions'

const WITH_ICON_PROPS_META: ComponentMeta<WithIconOwnProps>['props'] = {
  iconPosition: {
    name: 'iconPosition',
    options: IconPosition as unknown as string[],
    defaultValue: DEFAULT_WITH_ICON_ICON_POSITION,
    isRequired: false,
    isResponsive: false,
    description: 'Controls how the icon is aligned relative to the children.',
  },
}

export { WITH_ICON_PROPS_META }
