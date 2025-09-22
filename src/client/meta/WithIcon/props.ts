import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_WITH_ICON_ICON_POSITION,
  IconPosition,
  WithIconProps,
} from 'lib/components/elements/WithIcon/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { ICON_PROPS_META } from '../Icon/props'

const WITH_ICON_PROPS_META: ComponentMeta<WithIconProps>['props'] = {
  name: ICON_PROPS_META['name'],
  size: ICON_PROPS_META['size'],
  position: {
    options: IconPosition as unknown as string[],
    defaultValue: DEFAULT_WITH_ICON_ICON_POSITION,
    isRequired: false,
    isResponsive: false,
    description: 'Icon position relative to children.',
  },
  tagAttrs: HTML_TAG_PROPS_META['tagAttrs'],
  tagRef: HTML_TAG_PROPS_META['tagRef'],
  children: {
    ...HTML_TAG_PROPS_META['children'],
    isRequired: true,
  },
}

export { WITH_ICON_PROPS_META }
