import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_WITH_ICON_GAP,
  DEFAULT_WITH_ICON_ICON_PLACEMENT,
  WITH_ICON_ICON_PLACEMENTS,
  WITH_ICON_JUSTIFY_CONTENT,
  WithIconProps,
} from 'lib/components/core/WithIcon'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { ICON_PROPS_META } from '../Icon/props'
import { FLEX_PROPS_META } from '../Flex/props'
import { ROTATE_PROPS_META } from '../Rotate/props'
import { BOX_PROPS_META } from '../Box/props'
import { TEXT_PROPS_META } from '../Text/props'

const WITH_ICON_PROPS_META: ComponentMeta<WithIconProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META['children'],
    isRequired: true,
  },
  customSvgIcon: ICON_PROPS_META.children,
  gap: {
    ...FLEX_PROPS_META.gap,
    defaultValue: String(DEFAULT_WITH_ICON_GAP),
    description: 'Spacing between icon and content.',
  },
  iconAngle: {
    ...ROTATE_PROPS_META.angle,
    isRequired: false,
    description: 'Defines the rotation angle of the icon, animating when the value changes.',
  },
  iconColor: ICON_PROPS_META.color,
  iconIntent: ICON_PROPS_META.intent,
  iconName: ICON_PROPS_META.name,
  iconPlacement: {
    options: WITH_ICON_ICON_PLACEMENTS as unknown as string[],
    defaultValue: DEFAULT_WITH_ICON_ICON_PLACEMENT,
    isRequired: false,
    isResponsive: false,
    description: 'Icon placement relative to children.',
  },
  iconSize: ICON_PROPS_META.size,
  iconTypography: TEXT_PROPS_META.typography,
  inlineSize: BOX_PROPS_META.inlineSize,
  justifyContent: {
    ...FLEX_PROPS_META.justifyContent,
    options: WITH_ICON_JUSTIFY_CONTENT,
    description: 'Distributes an icon and children along the main axis.',
  },
  tagAttrs: HTML_TAG_PROPS_META['tagAttrs'],
  tagRef: HTML_TAG_PROPS_META['tagRef'],
}

export { WITH_ICON_PROPS_META }
