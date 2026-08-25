import { DEFAULT_FOCUS_TRAP_DISABLE_ESCAPE_ON_OUTSIDE_CLICK } from 'lib/components/pro/FocusTrap/constants'
import type { FocusTrapProps } from 'lib/components/pro/FocusTrap/types'
import type { DocProp } from 'client/definitions'

import { HTML_TAG_META } from '../HtmlTag'

export const FOCUS_TRAP_PROPS: Record<keyof FocusTrapProps, DocProp> = {
  active: {
    options: ['boolean'],
    isRequired: true,
    description: 'Enables or disables the focus trap.',
  },
  children: {
    ...HTML_TAG_META.props.children,
    isRequired: true,
    description: 'Content whose focus is controlled by the trap.',
  },
  disableEscapeOnOutsideClick: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_FOCUS_TRAP_DISABLE_ESCAPE_ON_OUTSIDE_CLICK),
    description: 'Prevents outside clicks from being treated as escape attempts.',
  },
  onFocusEscape: {
    options: ['() => void'],
    description:
      'Called when the user attempts to exit the trapped region (ESC key or clicking outside).',
  },
  tagRef: {
    ...HTML_TAG_META.props.tagRef,
    isRequired: true,
    description: 'Ref to the DOM element that the trap should contain focus within.',
  },
}
