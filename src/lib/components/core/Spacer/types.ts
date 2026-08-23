import type { BoxProps } from '../Box'

export type SpacerProps = {
  tagAttrs?: BoxProps<'div'>['tagAttrs']
  tagRef?: BoxProps<'div'>['tagRef']
  blockSize?: BoxProps<'div'>['blockSize']
}
