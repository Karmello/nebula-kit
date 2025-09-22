import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_WITH_ICON_ICON_POSITION,
  IconPosition,
  WithIconProps,
} from 'lib/components/utility/WithIcon/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { ICON_PROPS_META } from '../Icon/props'

const WITH_ICON_PROPS_META: ComponentMeta<WithIconProps>['props'] = {
  iconName: ICON_PROPS_META['iconName'],
  iconSize: ICON_PROPS_META['iconSize'],
  iconPosition: {
    options: IconPosition as unknown as string[],
    defaultValue: DEFAULT_WITH_ICON_ICON_POSITION,
    isRequired: false,
    isResponsive: false,
    description: 'Controls how the icon is aligned relative to the children.',
  },
  children: HTML_TAG_PROPS_META['children'],
  tagAttrs: HTML_TAG_PROPS_META['tagAttrs'],
  tagRef: HTML_TAG_PROPS_META['tagRef'],
}

export { WITH_ICON_PROPS_META }
