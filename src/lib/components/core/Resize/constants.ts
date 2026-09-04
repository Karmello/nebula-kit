import { BoxProps } from '../Box'

export const RESIZE_PROPERTIES = ['blockSize', 'inlineSize'] as const satisfies (keyof BoxProps)[]
