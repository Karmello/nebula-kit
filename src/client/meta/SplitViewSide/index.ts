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
      ...BOX_META.Box.props.blockSize,
      defaultValue: String(DEFAULT_SPLIT_VIEW_SIDE_BLOCK_SIZE),
    },
    children: {
      ...BOX_META.Box.props.children,
      isRequired: true,
    },
    color: {
      ...BOX_META.Box.props.color,
      isResponsive: false,
    },
    inlineSize: {
      ...BOX_META.Box.props.inlineSize,
      defaultValue: String(DEFAULT_SPLIT_VIEW_SIDE_INLINE_SIZE),
    },
    intent: {
      ...BOX_META.Box.props.intent,
      defaultValue: String(DEFAULT_SPLIT_VIEW_SIDE_INTENT),
      isResponsive: false,
    },
    padding: BOX_META.Box.props.padding,
    paddingBlock: BOX_META.Box.props.paddingBlock,
    paddingBottom: BOX_META.Box.props.paddingBottom,
    paddingInline: BOX_META.Box.props.paddingInline,
    paddingLeft: BOX_META.Box.props.paddingLeft,
    paddingRight: BOX_META.Box.props.paddingRight,
    paddingTop: BOX_META.Box.props.paddingTop,
    tagAttrs: BOX_META.Box.props.tagAttrs,
    tagRef: BOX_META.Box.props.tagRef,
  },
} satisfies ComponentMeta<SplitViewSideProps>
