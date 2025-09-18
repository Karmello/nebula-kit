import { FlexProps } from 'lib/components'
import { MakeRequired, SwitchAt } from 'lib/definitions'

export type ToolbarOwnProps = {
  switchAt?: SwitchAt
}

export const TOOLBAR_INHERITED_PROPS = {
  Flex: ['children', 'elemProps', 'elemRef'] as const satisfies readonly (keyof FlexProps<'nav'>)[],
}

export type ToolbarInheritedProps = MakeRequired<
  Pick<FlexProps<'nav'>, (typeof TOOLBAR_INHERITED_PROPS)['Flex'][number]>,
  'children'
>

export type ToolbarProps = ToolbarOwnProps & ToolbarInheritedProps
