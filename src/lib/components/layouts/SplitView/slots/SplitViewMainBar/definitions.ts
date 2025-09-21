import { BoxProps } from 'lib/components'
import { MakeRequired } from 'lib/definitions'
import { ElementType } from 'react'

export const SPLIT_VIEW_MAIN_BAR_INHERITED_PROPS = {
  Box: ['children', 'tag', 'tagAttrs', 'tagRef'] as const satisfies readonly (keyof BoxProps<'div'>)[],
}

export type SplitViewMainBarInheritedProps<T extends ElementType = 'div'> = MakeRequired<
  Pick<BoxProps<T>, (typeof SPLIT_VIEW_MAIN_BAR_INHERITED_PROPS)['Box'][number]>,
  'children'
>

export type SplitViewMainBarProps<T extends ElementType = 'div'> = SplitViewMainBarInheritedProps<T>
