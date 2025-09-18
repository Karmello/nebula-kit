import { GridProps } from 'lib/components'
import { MakeRequired, SwitchAt } from 'lib/definitions'

export type ToolbarOwnProps = {
  switchAt?: SwitchAt
}

export const TOOLBAR_INHERITED_PROPS = {
  Grid: ['children', 'elemProps', 'elemRef'] as const satisfies readonly (keyof GridProps<'nav'>)[],
}

export type ToolbarInheritedProps = MakeRequired<
  Pick<GridProps<'nav'>, (typeof TOOLBAR_INHERITED_PROPS)['Grid'][number]>,
  'children'
>

export type ToolbarProps = ToolbarOwnProps & ToolbarInheritedProps
