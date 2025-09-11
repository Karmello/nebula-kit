import { HorizontalPosition, MakeRequired, SidePanelLayoutSwitchAt } from 'lib/definitions'
import { GridProps } from 'lib/components'

export type SidePanelLayoutOwnProps = {
  sidePosition?: Extract<HorizontalPosition, 'left' | 'right'>
  switchAt?: SidePanelLayoutSwitchAt
}

export const SIDE_PANEL_LAYOUT_INHERITED_PROPS = {
  Grid: ['children', 'elemProps', 'elemRef'] as const satisfies readonly (keyof GridProps<'div'>)[],
}

export type SidePanelLayoutInheritedProps = MakeRequired<
  Pick<GridProps<'div'>, (typeof SIDE_PANEL_LAYOUT_INHERITED_PROPS)['Grid'][number]>,
  'children'
>

export type SidePanelLayoutProps = SidePanelLayoutOwnProps & SidePanelLayoutInheritedProps
