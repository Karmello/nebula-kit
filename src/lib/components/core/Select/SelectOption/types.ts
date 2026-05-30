import { ActionSurfaceProps, SelectProps } from 'lib/components'

export type SelectOptionProps = {
  // ActionSurface
  children: ActionSurfaceProps['children']
  // own
  value: string
}

export type SelectOptionInternalProps = {
  selected: ActionSurfaceProps['selected']
  onClick: ActionSurfaceProps['onClick']
  // Select
  variant: SelectProps['variant']
  intent: SelectProps['intent']
  color: SelectProps['color']
  size: SelectProps['size']
}
