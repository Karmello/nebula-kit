import type { ToolbarEndProps } from 'lib/components/pro/Toolbar/slots/ToolbarEnd/types'
import type { DocProp } from 'client/definitions'

export const TOOLBAR_END_PROPS: Record<keyof ToolbarEndProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content rendered.',
  },
  elemRef: {
    options: ['RefObject'],
    description: 'Reference to the element.',
  },
  elemAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the element.',
  },
}
