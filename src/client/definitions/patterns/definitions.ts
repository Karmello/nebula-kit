import { ComponentType } from 'react'

export const PATTERN_CATEGORIES = ['Basic', 'Layout', 'Cards', 'Forms', 'Actions'] as const

export type PatternCategory = (typeof PATTERN_CATEGORIES)[number]

export type Pattern = {
  id: string
  category: PatternCategory
  title: string
  description: string
  component: ComponentType
  code: string
  usage?: string
}
