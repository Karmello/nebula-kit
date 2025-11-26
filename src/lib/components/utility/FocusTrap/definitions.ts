import { HtmlTagProps } from 'lib/components'

type FocusTrapOwnProps = {
  active: boolean
  onClose?: () => void
}

type PropsFromHtmlTag = {
  children: HtmlTagProps['children']
  tagRef: HtmlTagProps<any>['tagRef']
}

export type FocusTrapProps = PropsFromHtmlTag & FocusTrapOwnProps
