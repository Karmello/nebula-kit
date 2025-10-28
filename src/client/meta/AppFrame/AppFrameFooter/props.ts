import { ComponentMeta } from 'client/definitions'
import { AppFrameFooterProps } from 'lib/components'

import {
  DEFAULT_APP_FRAME_FOOTER_BORDER_INTENT,
  DEFAULT_APP_FRAME_FOOTER_INTENT,
} from 'lib/components/layouts/AppFrame/slots/AppFrameFooter/definitions'

import { HTML_TAG_PROPS_META } from '../../HtmlTag/props'
import { BOX_PROPS_META } from '../../Box/props'

const APP_FRAME_FOOTER_PROPS_META: ComponentMeta<AppFrameFooterProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_APP_FRAME_FOOTER_INTENT),
  },
  borderIntent: {
    ...BOX_PROPS_META.borderIntent,
    defaultValue: String(DEFAULT_APP_FRAME_FOOTER_BORDER_INTENT),
  },
  padding: BOX_PROPS_META.padding,
  paddingInline: BOX_PROPS_META.paddingInline,
  paddingBlock: BOX_PROPS_META.paddingBlock,
  paddingTop: BOX_PROPS_META.paddingTop,
  paddingRight: BOX_PROPS_META.paddingRight,
  paddingBottom: BOX_PROPS_META.paddingBottom,
  paddingLeft: BOX_PROPS_META.paddingLeft,
}

export { APP_FRAME_FOOTER_PROPS_META }
