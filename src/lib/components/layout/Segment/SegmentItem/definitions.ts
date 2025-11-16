import { ElementType } from 'react'

import { FlexItemProps } from 'lib/components'

type PropsFromFlexItem<T extends ElementType = 'div'> = FlexItemProps<T>

export type SegmentItemProps<T extends ElementType = 'div'> = PropsFromFlexItem<T>
