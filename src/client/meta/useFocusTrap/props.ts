import { DEFAULT_USE_FOCUS_TRAP_DISABLE_ESCAPE_ON_OUTSIDE_CLICK } from 'lib/components/pro/useFocusTrap/constants'
import type { UseFocusTrapArgs } from 'lib/components/pro/useFocusTrap/types'
import type { DocProp } from 'client/definitions'

export const USE_FOCUS_TRAP_PROPS: Record<keyof UseFocusTrapArgs, DocProp> = {
  ref: {
    options: ['RefObject'],
    isRequired: true,
    description: 'Ref to the DOM element that the trap should contain focus within.',
  },
  active: {
    options: ['boolean'],
    isRequired: true,
    description: 'Enables or disables the focus trap.',
  },
  disableEscapeOnOutsideClick: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_USE_FOCUS_TRAP_DISABLE_ESCAPE_ON_OUTSIDE_CLICK),
    description: 'Prevents outside clicks from being treated as escape attempts.',
  },
  onFocusEscape: {
    options: ['() => void'],
    description:
      'Called when the user attempts to exit the trapped region (ESC key or clicking outside).',
  },
}
