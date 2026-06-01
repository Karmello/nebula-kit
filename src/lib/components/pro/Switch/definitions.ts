import type { BoxProps } from 'lib/components'
import { BoxIntent } from 'lib/components/core/Box'
import { ControlSize, RespValue } from 'lib/types'

export const SWITCH_BORDER_MULTIPLIER = 2

export const DEFAULT_SWITCH_SIZE: SwitchProps['size'] = 'xs'
export const DEFAULT_SWITCH_INTENT: SwitchProps['intent'] = 'tertiary'

export const SWITCH_INTENTS = ['muted', 'tertiary', 'secondary', 'primary'] as const satisfies BoxIntent[]

export type SwitchIntent = (typeof SWITCH_INTENTS)[number]

type PropsFromBox = Pick<BoxProps, 'tagAttrs' | 'tagRef' | 'disabled' | 'color'> & {
  intent?: RespValue<SwitchIntent>
}

type SwitchOwnProps = {
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  size?: ControlSize
}

export type SwitchProps = PropsFromBox & SwitchOwnProps
