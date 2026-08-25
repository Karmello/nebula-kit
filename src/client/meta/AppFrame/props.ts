import type { AppFrameProps } from 'lib/components/core/AppFrame/types'
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'

export const APP_FRAME_PROPS: Record<keyof AppFrameProps, Prop> = {
  children: {
    ...BOX_META.props.children,
    isRequired: true,
    options: ['AppFrame.Header', 'AppFrame.Main', 'AppFrame.Footer'],
    description: 'AppFrame.Footer is optional, the rest is required.',
  },
  stickyHeader: {
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: false,
    description: 'Keeps the header fixed at the top of the viewport.',
  },
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
}
