import { ComponentMeta } from 'client/definitions'

import { BOX_PROPS_META } from '../../../../core/Box/meta/props'
import { type SplitViewMainProps } from '../../slots/SplitViewMain/definitions'

const SPLIT_VIEW_MAIN_PROPS_META: ComponentMeta<SplitViewMainProps>['props'] = {
  children: {
    ...BOX_PROPS_META.children,
    options: ['ReactNode', 'SplitView.MainBar'],
    isRequired: true,
    description: 'Main slot content plus optional MainBar slot.',
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
}

export { SPLIT_VIEW_MAIN_PROPS_META }
