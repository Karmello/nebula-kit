import { BoxProps } from 'lib/components'
import { MakeRequired } from 'lib/definitions'
import { ElementType } from 'react'

export const SPLIT_VIEW_MAIN_BAR_INHERITED_PROPS = {
  Box: ['children', 'elem', 'elemProps', 'elemRef'] as const satisfies readonly (keyof BoxProps<'div'>)[],
}

export type SplitViewMainBarInheritedProps<E extends ElementType = 'div'> = MakeRequired<
  Pick<BoxProps<E>, (typeof SPLIT_VIEW_MAIN_BAR_INHERITED_PROPS)['Box'][number]>,
  'children'
>

export type SplitViewMainBarProps<E extends ElementType = 'div'> = SplitViewMainBarInheritedProps<E>
