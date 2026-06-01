import { ActionSurfaceProps, BoxProps } from 'lib/components'
import { ControlSize } from 'lib/types'
import { SELECT_VARIANTS } from 'lib/components/core/Select/constants'

import { BoxColor, BoxIntent } from '../Box'

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
