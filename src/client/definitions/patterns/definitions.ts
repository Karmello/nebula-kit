import { JSX } from 'react'

export const PATTERN_CATEGORIES = ['System', 'Layout', 'Forms'] as const

export type PatternCategory = (typeof PATTERN_CATEGORIES)[number]

export type Pattern = {
  id: string
  category: PatternCategory
  title: string
  description: string
  jsx: JSX.Element
}
