import { GridItemProps } from 'lib/index.core'

type PropsFromGridItem = Pick<GridItemProps<'div'>, 'tagAttrs' | 'tagRef'> & {
  children: GridItemProps<'div'>['children']
}

export type ToolbarEndProps = PropsFromGridItem
