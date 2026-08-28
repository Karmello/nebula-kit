import type { BoxProps } from 'lib/components/core/Box'

export type JoinedSurfaceBoxProps = Pick<
  BoxProps,
  | 'borderTopLeftRadius'
  | 'borderTopRightRadius'
  | 'borderBottomRightRadius'
  | 'borderBottomLeftRadius'
  | 'borderTopWidth'
  | 'borderRightWidth'
  | 'borderBottomWidth'
  | 'borderLeftWidth'
>
