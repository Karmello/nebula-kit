import { FlexProps } from 'lib/components'

export const DEFAULT_FORM_ACTIONS_GAP: FormActionsProps['gap'] = 7

type PropsFromFlex = Omit<FlexProps<'div'>, 'tag'>

export type FormActionsProps = PropsFromFlex
