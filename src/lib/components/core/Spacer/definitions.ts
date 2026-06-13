import type { BoxProps } from '../Box'

export const DEFAULT_SPACER_BLOCK_SIZE: SpacerProps['blockSize'] = '24px'

export type SpacerProps = Pick<BoxProps<'div'>, 'tagAttrs' | 'tagRef' | 'blockSize'>
