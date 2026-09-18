import type { BoxProps } from '../Box'

export type SpacerProps = {
  elemAttrs?: BoxProps<'div'>['elemAttrs']
  elemRef?: BoxProps<'div'>['elemRef']
  blockSize?: BoxProps<'div'>['blockSize']
}
