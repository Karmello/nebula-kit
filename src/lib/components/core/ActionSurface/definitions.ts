import { ComponentProps } from 'react'

import { ACTION_SURFACE_TAGS } from 'lib/constants'
import { ActionSurfaceTag } from 'lib/types'

import { BoxProps } from '../Box'

export const DEFAULT_ACTION_SURFACE_RIPPLE: ActionSurfaceProps['ripple'] = true

export type ActionSurfaceProps<T extends ActionSurfaceTag = (typeof ACTION_SURFACE_TAGS)[0]> = Omit<
  BoxProps<T>,
  'surface' | 'drawable' | 'interactive'
> & {
  ripple?: boolean
  selected?: boolean
  onClick?: ComponentProps<T>['onClick']
}
