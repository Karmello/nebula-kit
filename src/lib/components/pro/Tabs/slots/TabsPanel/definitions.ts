import { BoxProps } from 'lib/index.core'

type PropsFromBox = Pick<BoxProps, 'tagAttrs' | 'tagRef'> & {
  children: BoxProps['children']
}

type TabsPanelOwnProps = {
  value: string | number
}

export type TabsPanelProps = PropsFromBox & TabsPanelOwnProps
