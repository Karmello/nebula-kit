import type { SplitViewMainBarProps } from 'lib/components/pro/SplitView/slots/SplitViewMainBar/types'
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'

export const SPLIT_VIEW_MAIN_BAR_PROPS: Record<keyof SplitViewMainBarProps, Prop> = {
  children: {
    ...BOX_META.props.children,
    isRequired: true,
  },
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
}
