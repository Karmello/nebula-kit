import { type HtmlTagProps } from '../HtmlTag/types'

export type UseRotateArgs = {
  ref: HtmlTagProps<any>['tagRef']
  angle: number
  duration?: number
  easing?: string
}
