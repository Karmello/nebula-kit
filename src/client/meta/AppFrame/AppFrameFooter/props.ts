import { ComponentMeta } from 'client/definitions'
import { AppFrameFooterProps } from 'lib/components'
import { BoxIntent } from 'lib/components/base/Box/definitions'

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
    defaultValue: 'secondary' as BoxIntent,
  },
  minBlockSize: {
    ...BOX_PROPS_META.minBlockSize,
    defaultValue: String(80),
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
