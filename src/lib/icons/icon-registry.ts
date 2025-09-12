import { JSX, SVGProps } from 'react'

export const ICON_NAMES = [
  'check',
  'close',
  'search',
  'menu',
  'panel-left-open',
  'panel-right-open',
  'chevron-down',
  'chevron-up',
  'chevron-left',
  'chevron-right',
  'copy',
  'copy-check',
  'info',
  'triangle-alert',
  'check-circle',
  'circle-alert',
] as const

export type IconName = (typeof ICON_NAMES)[number]

let REGISTRY: Record<IconName, () => JSX.Element>

export const registerIcons = (map: typeof REGISTRY) => {
  REGISTRY = map
}

export const getSvgIconComponent = (name: IconName): ((props: SVGProps<SVGElement>) => JSX.Element) => {
  return REGISTRY[name]
}
