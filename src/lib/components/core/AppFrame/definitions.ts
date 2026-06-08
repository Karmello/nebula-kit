import { type GridProps } from '../Grid/definitions'

export type AppFrameProps = Pick<GridProps, 'tagAttrs' | 'tagRef'> & {
  children: GridProps['children']
  stickyHeader?: boolean
}
