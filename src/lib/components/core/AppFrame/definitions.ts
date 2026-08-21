import { type BoxProps } from '../Box/types'

export type AppFrameProps = Pick<BoxProps, 'tagAttrs' | 'tagRef'> & {
  children: BoxProps['children']
  stickyHeader?: boolean
}
