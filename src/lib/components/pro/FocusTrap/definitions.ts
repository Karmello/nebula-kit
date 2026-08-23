import { type HtmlTagProps } from '../../core/HtmlTag/definitions'

export const DEFAULT_FOCUS_TRAP_DISABLE_ESCAPE_ON_OUTSIDE_CLICK: FocusTrapProps['disableEscapeOnOutsideClick'] = false

export type FocusTrapProps = {
  // own
  active: boolean
  onFocusEscape?: () => void
  disableEscapeOnOutsideClick?: boolean
  // HtmlTag
  children: HtmlTagProps['children']
  tagRef: HtmlTagProps<any>['tagRef']
}
