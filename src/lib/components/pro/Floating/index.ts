import { Floating as FloatingBase } from './floating'
import { FloatingContent, FloatingTrigger } from './slots'

export const Floating = Object.assign(FloatingBase, {
  Trigger: FloatingTrigger,
  Content: FloatingContent,
})

export * from './constants'
export * from './floating'
export * from './slots'
export * from './types'
