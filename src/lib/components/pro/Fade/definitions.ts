import { ReactNode, RefObject } from 'react'

export const DEFAULT_FADE_DURATION = 250
export const DEFAULT_FADE_EASING = 'ease-out'

export type FadeProps = {
  children: ReactNode
  visible: boolean
  duration?: number
  easing?: string
  from?: number
  to?: number
  tagRef?: RefObject<HTMLDivElement>
}
