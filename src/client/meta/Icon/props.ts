import { ComponentMeta, DOCS_CSS_LABEL } from 'client/definitions'
import { IconProps } from 'lib/components'
import { DEFAULT_ICON_SIZE, ICON_SIZES } from 'lib/components/core/Icon'

import { BOX_PROPS_META } from '../Box/props'

const ICON_PROPS_META: ComponentMeta<IconProps>['props'] = {
  children: {
    ...BOX_PROPS_META.children,
    description: 'Custom SVG icon rendered instead of name.',
  },
  color: {
    ...BOX_PROPS_META.color,
    description: 'Color applied to the icon.',
  },
  intent: {
    ...BOX_PROPS_META.intent,
    description: 'Color tone applied to the icon.',
  },
  name: {
    options: ['IconName'],
    isResponsive: true,
    description: 'Name of the icon to render.',
  },
  size: {
    options: [...ICON_SIZES, DOCS_CSS_LABEL],
    defaultValue: String(DEFAULT_ICON_SIZE),
    isResponsive: true,
    description: 'Size of the icon.',
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
}

export { ICON_PROPS_META }
