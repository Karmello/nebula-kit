import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_DIVIDER_SURFACE,
  DEFAULT_DIVIDER_INTENT,
  DEFAULT_DIVIDER_MARGIN_BLOCK,
  DEFAULT_DIVIDER_OPACITY,
  DividerProps,
} from 'lib/components/core/elements/Divider'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'

const DIVIDER_PROPS_META: ComponentMeta<DividerProps>['props'] = {
  color: BOX_PROPS_META.color,
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
  opacity: {
    ...BOX_PROPS_META.opacity,
    defaultValue: String(DEFAULT_DIVIDER_OPACITY),
  },
  surface: {
    ...BOX_PROPS_META.surface,
    defaultValue: String(DEFAULT_DIVIDER_SURFACE),
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
}

export { DIVIDER_PROPS_META }
