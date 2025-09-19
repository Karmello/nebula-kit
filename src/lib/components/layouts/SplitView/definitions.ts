import { MakeRequired, SwitchAt } from 'lib/definitions'
import { GridProps } from 'lib/components'

export const SplitViewSidePosition = ['left', 'right'] as const
export type SplitViewSidePosition = (typeof SplitViewSidePosition)[number]

export const DEFAULT_SPLIT_VIEW_SIDE_WIDTH = '225px'

export type SplitViewOwnProps = {
  sidePosition?: SplitViewSidePosition
  switchAt?: SwitchAt
}

export const SPLIT_VIEW_INHERITED_PROPS = {
  Grid: ['children', 'elemProps', 'elemRef'] as const satisfies readonly (keyof GridProps<'div'>)[],
}

export type SplitViewInheritedProps = MakeRequired<
  Pick<GridProps<'div'>, (typeof SPLIT_VIEW_INHERITED_PROPS)['Grid'][number]>,
  'children'
>

export type SplitViewProps = SplitViewOwnProps & SplitViewInheritedProps
