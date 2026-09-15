import { type HtmlTagProps } from '../../core/HtmlTag/types'

export type UseFocusTrapArgs = {
  active: boolean
  onFocusEscape?: () => void
  disableEscapeOnOutsideClick?: boolean
  ref: HtmlTagProps<any>['tagRef']
}
