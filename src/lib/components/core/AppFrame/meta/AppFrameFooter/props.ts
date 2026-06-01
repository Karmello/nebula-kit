import { ComponentMeta } from 'client/definitions'

import { type AppFrameFooterProps, DEFAULT_APP_FRAME_FOOTER_INTENT } from '../../slots/AppFrameFooter/definitions'
import { BOX_PROPS_META } from '../../../Box/meta/props'

const APP_FRAME_FOOTER_PROPS_META: ComponentMeta<AppFrameFooterProps>['props'] = {
  children: {
    ...BOX_PROPS_META.children,
    isRequired: true,
  },
  color: BOX_PROPS_META.color,
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
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
}

export { APP_FRAME_FOOTER_PROPS_META }
