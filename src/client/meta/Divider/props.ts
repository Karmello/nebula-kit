import { ComponentMeta } from 'client/definitions'
import { DividerProps } from 'lib/components/elements/Divider/definitions'
import { DEFAULT_NEBKIT_PROVIDER_BORDER_WIDTH } from 'lib/components/utility/NebkitProvider/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'

const DIVIDER_PROPS_META: ComponentMeta<DividerProps>['props'] = {
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  intent: BOX_PROPS_META.intent,
  blockSize: {
    description: 'Controls the stroke weight of the divider.',
    options: ['ScaleValue', 'CSS'],
    defaultValue: String(DEFAULT_NEBKIT_PROVIDER_BORDER_WIDTH),
  },
}

export { DIVIDER_PROPS_META }
