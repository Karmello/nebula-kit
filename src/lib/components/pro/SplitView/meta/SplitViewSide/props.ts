import { ComponentMeta } from 'client/definitions'

import { BOX_PROPS_META } from '../../../../core/Box/meta/props'
import { type SplitViewSideProps } from '../../slots/SplitViewSide/definitions'
import { DEFAULT_SPLIT_VIEW_SIDE_INTENT, DEFAULT_SPLIT_VIEW_SIDE_WIDTH } from '../../slots/SplitViewSide/definitions'

const SPLIT_VIEW_SIDE_PROPS_META: ComponentMeta<SplitViewSideProps>['props'] = {
  blockSize: BOX_PROPS_META.blockSize,
  brand: BOX_PROPS_META.brand,
  children: {
    ...BOX_PROPS_META.children,
    isRequired: true,
  },
  color: BOX_PROPS_META.color,
  inlineSize: {
    ...BOX_PROPS_META.inlineSize,
    defaultValue: DEFAULT_SPLIT_VIEW_SIDE_WIDTH,
  },
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: JSON.stringify(DEFAULT_SPLIT_VIEW_SIDE_INTENT),
  },
  padding: BOX_PROPS_META.padding,
  paddingInline: BOX_PROPS_META.paddingInline,
  paddingBlock: BOX_PROPS_META.paddingBlock,
  paddingTop: BOX_PROPS_META.paddingTop,
  paddingRight: BOX_PROPS_META.paddingRight,
  paddingBottom: BOX_PROPS_META.paddingBottom,
  paddingLeft: BOX_PROPS_META.paddingLeft,
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  theme: BOX_PROPS_META.theme,
}

export { SPLIT_VIEW_SIDE_PROPS_META }
