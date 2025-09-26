import { ComponentMeta } from 'client/definitions'
import { AppFrameMainProps } from 'lib/components'

import { HTML_TAG_PROPS_META } from '../../HtmlTag/props'
import { BOX_PROPS_META } from '../../Box/props'

const APP_FRAME_MAIN_PROPS_META: ComponentMeta<AppFrameMainProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  padding: BOX_PROPS_META.padding,
  paddingInline: BOX_PROPS_META.paddingInline,
  paddingBlock: BOX_PROPS_META.paddingBlock,
  paddingTop: BOX_PROPS_META.paddingTop,
  paddingRight: BOX_PROPS_META.paddingRight,
  paddingBottom: BOX_PROPS_META.paddingBottom,
  paddingLeft: BOX_PROPS_META.paddingLeft,
}

export { APP_FRAME_MAIN_PROPS_META }
