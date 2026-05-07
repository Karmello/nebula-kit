import { ComponentMeta } from 'client/definitions'
import { DEFAULT_DIVIDER_INTENT, DEFAULT_DIVIDER_MARGIN_BLOCK, DividerProps } from 'lib/components/core/elements/Divider'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'

const DIVIDER_PROPS_META: ComponentMeta<DividerProps>['props'] = {
  color: BOX_PROPS_META.color,
  elevated: BOX_PROPS_META.elevated,
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_DIVIDER_INTENT),
  },
  marginBlock: {
    ...BOX_PROPS_META.marginBlock,
    defaultValue: String(DEFAULT_DIVIDER_MARGIN_BLOCK),
  },
  marginBottom: BOX_PROPS_META.marginBottom,
  marginTop: BOX_PROPS_META.marginTop,
  surface: BOX_PROPS_META.surface,
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
}

export { DIVIDER_PROPS_META }
