import { ComponentMeta } from 'client/definitions'
import { DEFAULT_DIVIDER_INTENT, DividerProps } from 'lib/components/elements/Divider/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'
import { NEBKIT_PROVIDER_PROPS_META } from '../NebkitProvider/props'

const DIVIDER_PROPS_META: ComponentMeta<DividerProps>['props'] = {
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_DIVIDER_INTENT),
  },
  size: {
    ...NEBKIT_PROVIDER_PROPS_META.borderWidthSize,
    description: 'Controls the stroke weight of the divider.',
  },
}

export { DIVIDER_PROPS_META }
