import { GridItemProps } from 'lib/components'
import { MakeRequired } from 'lib/definitions'

export const TOOLBAR_START_INHERITED_PROPS = {
  'Grid.Item': ['children', 'tagAttrs', 'tagRef'] as const satisfies readonly (keyof GridItemProps<'div'>)[],
}

export type ToolbarStartInheritedProps = MakeRequired<
  Pick<GridItemProps<'div'>, (typeof TOOLBAR_START_INHERITED_PROPS)['Grid.Item'][number]>,
  'children'
>

export type ToolbarStartProps = ToolbarStartInheritedProps
