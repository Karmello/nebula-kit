import { ComponentMeta } from 'client/definitions'
import { BOX_PROPS_META } from 'client/meta/Box/props'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { SplitViewSideProps } from 'lib/components'
import { DEFAULT_SPLIT_VIEW_SIDE_WIDTH } from 'lib/components/layouts/SplitView/slots/SplitViewSide/definitions'

const SPLIT_VIEW_SIDE_PROPS_META: ComponentMeta<SplitViewSideProps>['props'] = {
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  inlineSize: {
    ...BOX_PROPS_META.inlineSize,
    defaultValue: DEFAULT_SPLIT_VIEW_SIDE_WIDTH,
  },
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: "{ base: 'secondary', [switchAt]: 'neutral' }",
  },
  borderIntent: {
    ...BOX_PROPS_META.borderIntent,
    defaultValue: "{ base: 'primary', [switchAt]: 'neutral' }",
  },
}

export { SPLIT_VIEW_SIDE_PROPS_META }
