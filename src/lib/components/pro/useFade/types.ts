import { type HtmlElemProps } from 'lib/components/core/HtmlElem/types'

export type UseFadeArgs = {
  ref: HtmlElemProps<any>['elemRef']
  visible: boolean
  duration?: number
  easing?: string
}
