import { ComponentMeta } from 'client/definitions'

import { BOX_PROPS_META } from '../../../../core/Box/meta/props'
import { type SplitViewMainBarProps } from '../../slots/SplitViewMainBar/definitions'

const SPLIT_VIEW_MAIN_BAR_PROPS_META: ComponentMeta<SplitViewMainBarProps>['props'] = {
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  children: {
    ...BOX_PROPS_META.children,
    isRequired: true,
  },
}

export { SPLIT_VIEW_MAIN_BAR_PROPS_META }
