import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../../../../Box/meta'
import type { AppFrameMainProps } from '../types'

export const APP_FRAME_MAIN_META = {
  overview: {
    bundle: 'core',
    name: 'AppFrame.Main',
    title: 'Defines the central content region of AppFrame.',
    features: ['holds the primary application content or view'],
    composedOf: ['Box'],
    exposedTags: ['main'],
  },
  props: {
    children: {
      ...BOX_META.Box.props.children,
      isRequired: true,
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
} satisfies ComponentMeta<AppFrameMainProps>
