import { type HtmlElemProps } from '../../core/HtmlElem/types'

export type UseFocusTrapArgs = {
  active: boolean
  onFocusEscape?: () => void
  disableEscapeOnOutsideClick?: boolean
  ref: HtmlElemProps<any>['elemRef']
}
