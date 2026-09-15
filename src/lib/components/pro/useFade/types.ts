import { type HtmlTagProps } from 'lib/components/core/HtmlTag/types'

export type UseFadeArgs = {
  tagRef: HtmlTagProps<any>['tagRef']
  visible: boolean
  duration?: number
  easing?: string
}
