import { type HtmlElemProps } from '../HtmlElem/types'
import { USE_SLIDE_FROM } from './constants'

export type UseSlideFrom = (typeof USE_SLIDE_FROM)[number]

export type UseSlideArgs = {
  ref: HtmlElemProps<any>['elemRef']
  from: UseSlideFrom
  visible: boolean
  duration?: number
  easing?: string
}
