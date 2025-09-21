import { ScaleValue } from 'lib/definitions'
import { BoxProps } from 'lib/components'
import { BoxIntent } from 'lib/components/base/Box/definitions'

export const DEFAULT_DIVIDER_INTENT: BoxIntent = 'tertiary'
export const DEFAULT_DIVIDER_THICKNESS = 1

export type DividerOwnProps = {
  thickness?: ScaleValue | string
}

export const DIVIDER_INHERITED_PROPS = {
  Box: ['tagAttrs', 'tagRef', 'intent'] as const satisfies readonly (keyof BoxProps<'hr'>)[],
}

export type DividerInheritedProps = Pick<BoxProps<'hr'>, (typeof DIVIDER_INHERITED_PROPS)['Box'][number]>

export type DividerProps = DividerOwnProps & DividerInheritedProps
