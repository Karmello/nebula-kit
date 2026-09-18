import type { AppFrameProps } from 'lib/components/core/AppFrame/types'
import type { DocProp } from 'client/definitions'

export const APP_FRAME_PROPS: Record<keyof AppFrameProps, DocProp> = {
  children: {
    options: ['AppFrame.Header', 'AppFrame.Main', 'AppFrame.Footer'],
    isRequired: true,
    description: 'AppFrame.Footer is optional, the rest is required.',
  },
  elemRef: {
    options: ['RefObject'],
    description: 'Reference to the element.',
  },
  elemAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the element.',
  },
  // layout
  stickyHeader: {
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: false,
    description: 'Keeps the header fixed at the top of the viewport.',
    group: 'layout',
  },
}
