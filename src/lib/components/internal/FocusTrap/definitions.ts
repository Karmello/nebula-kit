import { HtmlTagProps } from 'lib/components/internal'

export const DEFAULT_FOCUS_TRAP_DISABLE_ESCAPE_ON_OUTSIDE_CLICK: FocusTrapProps['disableEscapeOnOutsideClick'] = false

type FocusTrapOwnProps = {
  active: boolean
  onFocusEscape?: () => void
  disableEscapeOnOutsideClick?: boolean
}

type PropsFromHtmlTag = {
  children: HtmlTagProps['children']
  tagRef: HtmlTagProps<any>['tagRef']
}

export type FocusTrapProps = PropsFromHtmlTag & FocusTrapOwnProps
