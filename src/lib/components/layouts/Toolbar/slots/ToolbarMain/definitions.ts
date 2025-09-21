import { GridItemProps } from 'lib/components'
import { MakeRequired } from 'lib/definitions'

export const TOOLBAR_MAIN_INHERITED_PROPS = {
  'Grid.Item': ['children', 'tagAttrs', 'tagRef'] as const satisfies readonly (keyof GridItemProps<'div'>)[],
}

export type ToolbarMainInheritedProps = MakeRequired<
  Pick<GridItemProps<'div'>, (typeof TOOLBAR_MAIN_INHERITED_PROPS)['Grid.Item'][number]>,
  'children'
>

export type ToolbarMainProps = ToolbarMainInheritedProps
