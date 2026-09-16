import { type HtmlElemProps } from '../HtmlElem/types'

export type UseRotateArgs = {
  ref: HtmlElemProps<any>['elemRef']
  angle: number
  duration?: number
  easing?: string
}
