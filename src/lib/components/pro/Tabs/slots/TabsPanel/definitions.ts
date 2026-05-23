import { BoxProps } from 'lib/components'

type PropsFromBox = Pick<BoxProps, 'tagAttrs' | 'tagRef'> & {
  children: BoxProps['children']
}

type TabsPanelOwnProps = {
  value: string | number
}

export type TabsPanelProps = PropsFromBox & TabsPanelOwnProps
