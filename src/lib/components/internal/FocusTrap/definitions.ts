import { ElementType } from 'react'

import { HtmlTagProps } from 'lib/components'

type FocusTrapOwnProps = {
  active: boolean
  onClose?: () => void
}

type PropsFromHtmlTag<T extends ElementType> = Pick<HtmlTagProps<T>, 'tagRef'> & {
  children: HtmlTagProps['children']
}

export type FocusTrapProps<T extends ElementType> = PropsFromHtmlTag<T> & FocusTrapOwnProps
