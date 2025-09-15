import { BoxProps } from 'lib/components'
import { ScaleValue } from 'lib/definitions'

export type DividerOwnProps = {
  thickness?: ScaleValue | string
}

export const DIVIDER_INHERITED_PROPS = {
  Box: ['elemProps', 'elemRef', 'intent'] as const satisfies readonly (keyof BoxProps<'hr'>)[],
}

export type DividerInheritedProps = Pick<BoxProps<'hr'>, (typeof DIVIDER_INHERITED_PROPS)['Box'][number]>

export type DividerProps = DividerOwnProps & DividerInheritedProps
