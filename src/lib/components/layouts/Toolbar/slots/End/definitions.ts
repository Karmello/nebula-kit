import { GridItemProps } from 'lib/components'
import { MakeRequired } from 'lib/definitions'

export const TOOLBAR_END_INHERITED_PROPS = {
  'Grid.Item': [
    'children',
    'elemProps',
    'elemRef',
  ] as const satisfies readonly (keyof GridItemProps<'div'>)[],
}

export type ToolbarEndInheritedProps = MakeRequired<
  Pick<GridItemProps<'div'>, (typeof TOOLBAR_END_INHERITED_PROPS)['Grid.Item'][number]>,
  'children'
>

export type ToolbarEndProps = ToolbarEndInheritedProps
