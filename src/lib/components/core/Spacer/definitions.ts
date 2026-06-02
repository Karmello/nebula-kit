import { BoxProps } from '../Box'

export const DEFAULT_SPACER_BLOCK_SIZE: SpacerProps['blockSize'] = 'md'

type PropsFromBox = Pick<BoxProps<'div'>, 'tagAttrs' | 'tagRef' | 'blockSize'>

export type SpacerProps = PropsFromBox
