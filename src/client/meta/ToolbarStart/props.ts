import type { ToolbarStartProps } from 'lib/components/pro/Toolbar/slots/ToolbarStart/types'
import type { DocProp } from 'client/definitions'

export const TOOLBAR_START_PROPS: Record<keyof ToolbarStartProps, DocProp> = {
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
