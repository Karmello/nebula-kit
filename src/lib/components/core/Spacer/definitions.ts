import type { BoxProps } from '../Box'

export const DEFAULT_SPACER_BLOCK_SIZE: SpacerProps['blockSize'] = '24px'

export type SpacerProps = {
  tagAttrs?: BoxProps<'div'>['tagAttrs']
  tagRef?: BoxProps<'div'>['tagRef']
  blockSize?: BoxProps<'div'>['blockSize']
}
