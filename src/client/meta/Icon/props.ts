import { ComponentMeta } from 'client/definitions'
import { IconProps } from 'lib/components'
import { DEFAULT_ICON_SIZE } from 'lib/components/core/elements/Icon'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'

const ICON_PROPS_META: ComponentMeta<IconProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    description: 'Custom SVG icon.',
  },
  color: {
    ...BOX_PROPS_META.color,
    description: 'Color applied to the icon.',
  },
  intent: {
    ...BOX_PROPS_META.intent,
    description: 'Tone level applied to the icon.',
  },
  name: {
    options: ['IconName'],
    isRequired: true,
    description: 'Name of the icon to render.',
  },
  size: {
    options: ['CSS'],
    defaultValue: String(DEFAULT_ICON_SIZE),
    description: 'Size of the icon.',
  },
  tagAttrs: HTML_TAG_PROPS_META['tagAttrs'],
  tagRef: HTML_TAG_PROPS_META['tagRef'],
}

export { ICON_PROPS_META }
