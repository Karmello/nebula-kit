import { ComponentMeta } from 'client/definitions'

import { type AppFrameMainProps } from '../../slots/AppFrameMain/definitions'
import { BOX_PROPS_META } from '../../../Box/meta/props'

const APP_FRAME_MAIN_PROPS_META: ComponentMeta<AppFrameMainProps>['props'] = {
  children: {
    ...BOX_PROPS_META.children,
    isRequired: true,
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  padding: BOX_PROPS_META.padding,
  paddingInline: BOX_PROPS_META.paddingInline,
  paddingBlock: BOX_PROPS_META.paddingBlock,
  paddingTop: BOX_PROPS_META.paddingTop,
  paddingRight: BOX_PROPS_META.paddingRight,
  paddingBottom: BOX_PROPS_META.paddingBottom,
  paddingLeft: BOX_PROPS_META.paddingLeft,
}

export { APP_FRAME_MAIN_PROPS_META }
