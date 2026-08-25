import type { SplitViewMainProps } from 'lib/components/pro/SplitView/slots/SplitViewMain/types'
import type { DocProp } from 'client/definitions'

import { BOX_META } from '../Box'

export const SPLIT_VIEW_MAIN_PROPS: Record<keyof SplitViewMainProps, DocProp> = {
  children: {
    ...BOX_META.props.children,
    options: ['ReactNode', 'SplitView.MainBar'],
    isRequired: true,
    description: 'Main slot content plus optional MainBar slot.',
  },
  padding: BOX_META.props.padding,
  paddingBlock: BOX_META.props.paddingBlock,
  paddingBottom: BOX_META.props.paddingBottom,
  paddingInline: BOX_META.props.paddingInline,
  paddingLeft: BOX_META.props.paddingLeft,
  paddingRight: BOX_META.props.paddingRight,
  paddingTop: BOX_META.props.paddingTop,
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
}
