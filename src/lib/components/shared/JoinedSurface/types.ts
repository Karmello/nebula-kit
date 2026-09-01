import { BoxProps } from 'lib/components/core/Box'

import { JOINED_SURFACE_ATTACHED } from './constants'

export type JoinedSurfaceAttached = (typeof JOINED_SURFACE_ATTACHED)[number]

export type JoinedSurfaceProps = {
  // own
  bordered?: boolean
  squared?: boolean
  attached?: JoinedSurfaceAttached
  // box
  children: BoxProps['children']
  flexDirection?: BoxProps['flexDirection']
  color?: BoxProps['color']
  intent?: BoxProps['intent']
  surfaceDepth?: BoxProps['surfaceDepth']
  bg?: BoxProps['bg']
  border?: BoxProps['border']
  inlineSize?: BoxProps['inlineSize']
  maxInlineSize?: BoxProps['maxInlineSize']
  blockSize?: BoxProps['blockSize']
  maxBlockSize?: BoxProps['maxBlockSize']
}
