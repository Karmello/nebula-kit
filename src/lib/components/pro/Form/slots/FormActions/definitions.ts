import { BoxProps } from 'lib/index.core'

export const DEFAULT_FORM_ACTIONS_GAP: FormActionsProps['gap'] = '10px'

type PropsFromBox = Pick<
  BoxProps<'div'>,
  | 'tagAttrs'
  | 'tagRef'
  | 'children'
  | 'flexDirection'
  | 'flexWrap'
  | 'justifyContent'
  | 'alignItems'
  | 'alignContent'
  | 'gap'
  | 'rowGap'
  | 'columnGap'
>

export type FormActionsProps = PropsFromBox
