import { BOX_META } from 'lib/components/core/Box/meta'
import { ComponentMeta } from 'client/definitions'

import type { SplitViewMainProps } from '../types'

export const SPLIT_VIEW_MAIN_META = {
  overview: {
    bundle: 'pro',
    name: 'SplitView.Main',
    title: 'Defines the main content region of the SplitView layout.',
    features: ['holds the primary content region of the SplitView layout'],
    composedOf: ['Box', 'IconButton', 'Spacer'],
    exposedTags: ['section'],
    slots: ['SplitView.MainBar'],
  },
  props: {
    children: {
      ...BOX_META.Box.props.children,
      options: ['ReactNode', 'SplitView.MainBar'],
      isRequired: true,
      description: 'Main slot content plus optional MainBar slot.',
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
} satisfies ComponentMeta<SplitViewMainProps>
