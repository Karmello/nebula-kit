import { ComponentMeta } from 'client/definitions'
import { BOX_PROPS_META } from 'client/meta/Box/props'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { SplitViewSideProps } from 'lib/components'
import { DEFAULT_SPLIT_VIEW_SIDE_WIDTH } from 'lib/components/pro/layouts/SplitView/slots/SplitViewSide/definitions'

const SPLIT_VIEW_SIDE_PROPS_META: ComponentMeta<SplitViewSideProps>['props'] = {
  borderIntent: {
    ...BOX_PROPS_META.borderIntent,
    defaultValue: "{ base: 'muted', [switchAt]: 'neutral' }",
  },
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  color: BOX_PROPS_META.color,
  inlineSize: {
    ...BOX_PROPS_META.inlineSize,
    defaultValue: DEFAULT_SPLIT_VIEW_SIDE_WIDTH,
  },
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: "{ base: 'tertiary', [switchAt]: 'neutral' }",
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
}

export { SPLIT_VIEW_SIDE_PROPS_META }
