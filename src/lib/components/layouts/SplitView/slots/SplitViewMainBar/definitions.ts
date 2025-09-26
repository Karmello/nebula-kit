import { ElementType } from 'react'

import { HtmlTagProps } from 'lib/components'

type PropsFromHtmlTag<T extends ElementType = 'div'> = Pick<
  HtmlTagProps<T>,
  'tag' | 'tagAttrs' | 'tagRef'
> & {
  children: HtmlTagProps<T>['children']
}

export type SplitViewMainBarProps<T extends ElementType = 'div'> = PropsFromHtmlTag<T>
