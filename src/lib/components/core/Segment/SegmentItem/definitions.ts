import { ElementType } from 'react'

import { BoxProps } from 'lib/index.core'

export type SegmentItemProps<T extends ElementType = 'div'> = Pick<
  BoxProps<T>,
  'tag' | 'tagAttrs' | 'tagRef' | 'hidden' | 'children' | 'flex' | 'flexGrow' | 'flexShrink' | 'flexBasis' | 'alignSelf' | 'order'
>
