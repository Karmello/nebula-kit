import {
  DEFAULT_SPLIT_VIEW_SIDE_BLOCK_SIZE,
  DEFAULT_SPLIT_VIEW_SIDE_INLINE_SIZE,
  DEFAULT_SPLIT_VIEW_SIDE_INTENT,
} from 'lib/components/pro/SplitView/slots/SplitViewSide/constants'
import type { SplitViewSideProps } from 'lib/components/pro/SplitView/slots/SplitViewSide/types'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'

export const SPLIT_VIEW_SIDE_META = {
  overview: {
    bundle: 'pro',
    name: 'SplitView.Side',
    title: 'Defines the side panel region of the SplitView layout.',
    features: [
      'traps keyboard focus when the side panel is rendered in overlay mode',
      'automatically renders a close action when displayed in overlay mode',
    ],
    guidelines: ['typically used for navigation, menus or supplementary content'],
    composedOf: ['Box', 'IconButton', 'Resize', 'FocusTrap'],
    exposedTags: ['aside'],
  },
  props: {
    blockSize: {
      ...BOX_META.props.blockSize,
      defaultValue: String(DEFAULT_SPLIT_VIEW_SIDE_BLOCK_SIZE),
    },
    children: {
      ...BOX_META.props.children,
      isRequired: true,
    },
    color: {
      ...BOX_META.props.color,
      isResponsive: false,
    },
    inlineSize: {
      ...BOX_META.props.inlineSize,
      defaultValue: String(DEFAULT_SPLIT_VIEW_SIDE_INLINE_SIZE),
    },
    intent: {
      ...BOX_META.props.intent,
      defaultValue: String(DEFAULT_SPLIT_VIEW_SIDE_INTENT),
      isResponsive: false,
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
  },
} satisfies ComponentMeta<SplitViewSideProps>
