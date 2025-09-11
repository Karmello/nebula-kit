import { BoxProps } from 'lib/components'
import { MakeRequired } from 'lib/definitions'
import { ElementType } from 'react'

export const SIDE_PANEL_LAYOUT_MAIN_BAR_INHERITED_PROPS = {
  Box: ['children', 'elem', 'elemProps', 'elemRef'] as const satisfies readonly (keyof BoxProps<'div'>)[],
}

export type SidePanelLayoutMainBarInheritedProps<E extends ElementType = 'div'> = MakeRequired<
  Pick<BoxProps<E>, (typeof SIDE_PANEL_LAYOUT_MAIN_BAR_INHERITED_PROPS)['Box'][number]>,
  'children'
>

export type SidePanelLayoutMainBarProps<E extends ElementType = 'div'> =
  SidePanelLayoutMainBarInheritedProps<E>
