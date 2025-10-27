import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_WITH_ICON_COLUMN_GAP,
  DEFAULT_WITH_ICON_ICON_POSITION,
  ICON_POSITIONS,
  WithIconProps,
} from 'lib/components/layout/WithIcon/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { ICON_PROPS_META } from '../Icon/props'
import { FLEX_PROPS_META } from '../Flex/props'

const WITH_ICON_PROPS_META: ComponentMeta<WithIconProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META['children'],
    isRequired: true,
  },
  tagAttrs: HTML_TAG_PROPS_META['tagAttrs'],
  tagRef: HTML_TAG_PROPS_META['tagRef'],
  justifyContent: FLEX_PROPS_META.justifyContent,
  columnGap: {
    ...FLEX_PROPS_META.columnGap,
    defaultValue: String(DEFAULT_WITH_ICON_COLUMN_GAP),
  },
  ...ICON_PROPS_META,
  position: {
    options: ICON_POSITIONS as unknown as string[],
    defaultValue: DEFAULT_WITH_ICON_ICON_POSITION,
    isRequired: false,
    isResponsive: false,
    description: 'Icon position relative to children.',
  },
}

export { WITH_ICON_PROPS_META }
