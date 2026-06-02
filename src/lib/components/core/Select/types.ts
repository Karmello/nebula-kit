import { ControlSize } from 'lib/types'

import { ActionSurfaceProps } from '../ActionSurface'
import { BoxColor, BoxIntent, BoxProps } from '../Box'
import { SELECT_VARIANTS } from './constants'

type SelectVariant = (typeof SELECT_VARIANTS)[number]

export type SelectProps = {
  // Box
  children: BoxProps['children']
  // ActionSurface
  variant?: SelectVariant
  intent?: BoxIntent
  color?: BoxColor
  inlineSize?: ActionSurfaceProps['inlineSize']
  disabled?: ActionSurfaceProps['disabled']
  // own
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  size?: ControlSize
  visibleItemsCount?: number
  staticLabel?: string
}
