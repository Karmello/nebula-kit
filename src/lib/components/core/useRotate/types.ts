import { type HtmlTagProps } from '../HtmlTag/types'

export type UseRotateArgs = {
  tagRef: HtmlTagProps<any>['tagRef']
  angle: number
  duration?: number
  easing?: string
}
