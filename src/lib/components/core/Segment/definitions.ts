import { ElementType } from 'react'

import { BoxProps } from 'lib/index.core'

export const DEFAULT_SEGMENT_FLEX_DIRECTION: SegmentProps['flexDirection'] = 'row'

type PropsFromBox<T extends ElementType = 'div'> = Pick<
  BoxProps<T>,
  'children' | 'tag' | 'tagAttrs' | 'tagRef' | 'flexDirection'
>

export type SegmentProps<T extends ElementType = 'div'> = PropsFromBox<T>
