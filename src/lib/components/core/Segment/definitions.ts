import { ElementType } from 'react'

import { FlexProps } from 'lib/index.core'

export const DEFAULT_SEGMENT_FLEX_DIRECTION: SegmentProps['flexDirection'] = 'row'

type PropsFromFlex<T extends ElementType = 'div'> = Pick<
  FlexProps<T>,
  'children' | 'tag' | 'tagAttrs' | 'tagRef' | 'flexDirection'
>

export type SegmentProps<T extends ElementType = 'div'> = PropsFromFlex<T>
