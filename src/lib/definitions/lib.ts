import { JSX } from 'react'

// constants

export const LIB_NAME = 'NebulaKit'
export const LIB_PREFIX = 'neb'
export const BREAKPOINTS = ['base', 'sm', 'md', 'lg', 'xl'] as const
export const DEFAULT_BORDER_RADIUS: ScaleValue = 0

export const SCALE = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
  29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
  56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
] as const

// types

export type Breakpoint = (typeof BREAKPOINTS)[number]
export type ScaleValue = (typeof SCALE)[number]

export type CompWithCssVarsPrefix = 'box' | 'text' | 'flex' | 'grid' | 'table' | 'cluster'

export type ComponentMeta<PropsType> = {
  overview: {
    name: string
    description: string
    responsibilities?: string[]
    useCases?: string[]
    defaultBehavior?: string[]
    responsiveProps?: string[]
    propsDescription?: string
  }
  props: {
    category: string
    name: keyof PropsType
    options: string[]
    defaultValue: string
    isRequired: boolean
    isResponsive: boolean
    description: string
  }[]
  examples?: {
    jsx: JSX.Element
    description?: string
    noSandBox?: boolean
  }[]
}

// enums

export enum Language {
  DEFAULT = 'en',
  EN = 'en',
  PL = 'pl',
}

export enum Theme {
  DEFAULT = 'light',
  LIGHT = 'light',
  GRAY = 'gray',
  DARK = 'dark',
}

export enum Slot {
  header = 'Header',
  side = 'Side',
  sideMobile = 'SideMobile',
  sideDesktop = 'SideDesktop',
  main = 'Main',
  footer = 'Footer',
}
