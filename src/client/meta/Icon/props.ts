import { ComponentMeta } from 'client/definitions'
import { IconProps } from 'lib/components'
import { BOX_INTENTS } from 'lib/components/base/Box/definitions'
import { DEFAULT_ICON_SIZE } from 'lib/components/elements/Icon/definitions'
import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const ICON_PROPS_META: ComponentMeta<IconProps>['props'] = {
  tagAttrs: HTML_TAG_PROPS_META['tagAttrs'],
  tagRef: HTML_TAG_PROPS_META['tagRef'],
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
    options: BOX_INTENTS as unknown as string[],
    description: 'System semantic color style for the icon.',
  },
}

export { ICON_PROPS_META }
