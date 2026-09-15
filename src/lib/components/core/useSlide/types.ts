import { type HtmlTagProps } from '../HtmlTag/types'
import { USE_SLIDE_FROM } from './constants'

export type UseSlideFrom = (typeof USE_SLIDE_FROM)[number]

export type UseSlideArgs = {
  ref: HtmlTagProps<any>['tagRef']
  from: UseSlideFrom
  visible: boolean
  duration?: number
  easing?: string
}
