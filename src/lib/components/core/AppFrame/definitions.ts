import { GridProps } from 'lib/components'

type AppFrameOwnProps = {
  stickyHeader?: boolean
}

type PropsFromGrid = Pick<GridProps, 'tagAttrs' | 'tagRef'> & {
  children: GridProps['children']
}

export type AppFrameProps = PropsFromGrid & AppFrameOwnProps
