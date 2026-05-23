import { ComponentMeta } from 'client/definitions'
import { BOX_PROPS_META } from 'client/meta/Box/props'
import { SplitViewMainBarProps } from 'lib/components'

const SPLIT_VIEW_MAIN_BAR_PROPS_META: ComponentMeta<SplitViewMainBarProps>['props'] = {
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  children: {
    ...BOX_PROPS_META.children,
    isRequired: true,
  },
}

export { SPLIT_VIEW_MAIN_BAR_PROPS_META }
