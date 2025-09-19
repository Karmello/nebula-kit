import { ButtonProps } from 'lib/components'

type Group = Omit<ButtonProps, 'children' | 'size' | 'variant' | 'intent'> & {
  key: string
  label: string
  items?: Item[]
}

type Item = Omit<ButtonProps, 'children' | 'size' | 'variant' | 'intent'> & {
  key: string
  label: string
}

export type Config = {
  default?: {
    variant?: ButtonProps['variant']
    intent?: ButtonProps['intent']
  }
  active?: {
    variant?: ButtonProps['variant']
    intent?: ButtonProps['intent']
  }
}

export type SideNavProps = {
  groups: Group[]
  activeKey: string
  groupConfig?: Config
  itemConfig?: Config
}
