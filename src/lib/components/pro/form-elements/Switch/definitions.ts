import { BoxProps } from 'lib/components'
import { ButtonSize } from 'lib/components/core/controls/Button'

export const SWITCH_SIZE_MAP: Record<ButtonSize, { borderMultiplier: number }> = {
  xs: { borderMultiplier: 1 },
  sm: { borderMultiplier: 2 },
  md: { borderMultiplier: 2 },
  lg: { borderMultiplier: 3 },
}

export const DEFAULT_SWITCH_SIZE: SwitchProps['size'] = 'sm'

type PropsFromBox = Pick<BoxProps, 'tagAttrs' | 'tagRef' | 'disabled' | 'color'>

type SwitchOwnProps = {
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  size?: ButtonSize
}

export type SwitchProps = PropsFromBox & SwitchOwnProps
