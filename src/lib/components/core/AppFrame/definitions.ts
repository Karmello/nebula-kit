import { GridProps } from 'lib/components'

export type AppFrameProps = Pick<GridProps, 'tagAttrs' | 'tagRef'> & {
  children: GridProps['children']
  stickyHeader?: boolean
}
