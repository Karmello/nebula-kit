import { BoxProps } from 'lib/components'

export const DEFAULT_SPACER_BLOCK_SIZE = 2

export const SPACER_INHERITED_PROPS = {
  Box: ['tagAttrs', 'tagRef', 'blockSize'] as const satisfies readonly (keyof BoxProps<'div'>)[],
}

export type SpacerInheritedProps = Pick<BoxProps<'div'>, (typeof SPACER_INHERITED_PROPS)['Box'][number]>

export type SpacerProps = SpacerInheritedProps
