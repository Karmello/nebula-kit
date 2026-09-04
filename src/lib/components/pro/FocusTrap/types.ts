import { type HtmlTagProps } from '../../core/HtmlTag/types'

export type FocusTrapProps = {
  // own
  active: boolean
  onFocusEscape?: () => void
  disableEscapeOnOutsideClick?: boolean
  // HtmlTag
  children: HtmlTagProps['children']
  tagRef: HtmlTagProps<any>['tagRef']
}
