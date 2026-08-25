import type { SplitViewMainBarProps } from 'lib/components/pro/SplitView/slots/SplitViewMainBar/types'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'

export const SPLIT_VIEW_MAIN_BAR_META = {
  overview: {
    bundle: 'pro',
    name: 'SplitView.MainBar?',
    title: 'Defines the horizontal region displayed above the main content',
    features: ['can contain any custom content, such as breadcrumbs or other controls'],
    guidelines: ['should be placed inside SplitView.Main slot'],
    composedOf: ['Box'],
    exposedTags: ['div'],
  },
  props: {
    children: {
      ...BOX_META.props.children,
      isRequired: true,
    },
    tagAttrs: BOX_META.props.tagAttrs,
    tagRef: BOX_META.props.tagRef,
  },
} satisfies ComponentMeta<SplitViewMainBarProps>
