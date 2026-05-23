import { GridItemProps } from 'lib/components'

type PropsFromGridItem = Pick<GridItemProps<'div'>, 'tagAttrs' | 'tagRef'> & {
  children: GridItemProps<'div'>['children']
}

export type ToolbarEndProps = PropsFromGridItem
