import { ComponentMeta } from 'client/definitions'
import { AppFrameFooterProps } from 'lib/components'

import {
  DEFAULT_APP_FRAME_FOOTER_BORDER_INTENT,
  DEFAULT_APP_FRAME_FOOTER_INTENT,
} from 'lib/components/core/layouts/AppFrame'

import { HTML_TAG_PROPS_META } from '../../HtmlTag/props'
import { BOX_PROPS_META } from '../../Box/props'

const APP_FRAME_FOOTER_PROPS_META: ComponentMeta<AppFrameFooterProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  color: BOX_PROPS_META.color,
  borderIntent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_APP_FRAME_FOOTER_BORDER_INTENT),
    description: "Sets the visual intent of the component's border.",
  },
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_APP_FRAME_FOOTER_INTENT),
  },
  padding: BOX_PROPS_META.padding,
  paddingBlock: BOX_PROPS_META.paddingBlock,
  paddingBottom: BOX_PROPS_META.paddingBottom,
  paddingInline: BOX_PROPS_META.paddingInline,
  paddingLeft: BOX_PROPS_META.paddingLeft,
  paddingRight: BOX_PROPS_META.paddingRight,
  paddingTop: BOX_PROPS_META.paddingTop,
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
}

export { APP_FRAME_FOOTER_PROPS_META }
