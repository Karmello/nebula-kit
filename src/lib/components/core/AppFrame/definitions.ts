import { GridProps } from 'lib/index.core'

export type AppFrameProps = Pick<GridProps, 'tagAttrs' | 'tagRef'> & {
  children: GridProps['children']
  stickyHeader?: boolean
}
