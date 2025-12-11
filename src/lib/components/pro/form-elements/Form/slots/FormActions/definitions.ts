import { FlexProps } from 'lib/components'

export const DEFAULT_FORM_ACTIONS_GAP: FormActionsProps['gap'] = '10px'

type PropsFromFlex = Omit<FlexProps<'div'>, 'tag'>

export type FormActionsProps = PropsFromFlex
