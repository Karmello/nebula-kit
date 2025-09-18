import { HorizontalPosition, MakeRequired, SplitViewSwitchAt } from 'lib/definitions'
import { GridProps } from 'lib/components'

export type SplitViewOwnProps = {
  sidePosition?: Extract<HorizontalPosition, 'left' | 'right'>
  switchAt?: SplitViewSwitchAt
}

export const SPLIT_VIEW_INHERITED_PROPS = {
  Grid: ['children', 'elemProps', 'elemRef'] as const satisfies readonly (keyof GridProps<'div'>)[],
}

export type SplitViewInheritedProps = MakeRequired<
  Pick<GridProps<'div'>, (typeof SPLIT_VIEW_INHERITED_PROPS)['Grid'][number]>,
  'children'
>

export type SplitViewProps = SplitViewOwnProps & SplitViewInheritedProps
