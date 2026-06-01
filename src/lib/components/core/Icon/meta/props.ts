import { ComponentMeta, DOCS_CSS_LABEL } from 'client/definitions'

import { type IconProps, DEFAULT_ICON_SIZE, ICON_SIZES } from '../definitions'
import { BOX_PROPS_META } from '../../Box/meta/props'

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
