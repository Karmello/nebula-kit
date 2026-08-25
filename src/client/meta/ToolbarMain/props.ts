import type { ToolbarMainProps } from 'lib/components/pro/Toolbar/slots/ToolbarMain/types'
import type { DocProp } from 'client/definitions'

export const TOOLBAR_MAIN_PROPS: Record<keyof ToolbarMainProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content rendered.',
  },
  tagAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the root tag.',
  },
  tagRef: {
    options: ['RefObject'],
    description: 'Reference to the root HTML tag.',
  },
}
