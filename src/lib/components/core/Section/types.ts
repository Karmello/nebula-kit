import { ReactNode } from 'react'

import { type TitleProps } from 'lib/index.core'
import type { SectionTag, TShirtSize } from 'lib/types'

import { type BoxProps } from '../Box'
import { type TextProps } from '../Text'
import { SECTION_VARIANTS } from './constants'

export type SectionVariant = (typeof SECTION_VARIANTS)[number]

export type SectionProps<T extends SectionTag = 'section'> = {
  // own
  heading: ReactNode
  headingIntent?: TextProps['intent']
  size?: TShirtSize
  variant?: SectionVariant
  // Box
  tag?: BoxProps<T>['tag']
  tagAttrs?: BoxProps<T>['tagAttrs']
  tagRef?: BoxProps<T>['tagRef']
  color?: BoxProps<T>['color']
  intent?: BoxProps<T>['intent']
  interactive?: BoxProps<T>['interactive']
  children: BoxProps<T>['children']
  // Title
  iconName?: TitleProps['iconName']
  iconPlacement?: TitleProps['iconPlacement']
}
