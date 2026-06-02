import { ActionSurfaceProps, SelectProps } from 'lib/index.core'

export type SelectOptionProps = {
  // ActionSurface
  children: ActionSurfaceProps['children']
  // own
  value: string
}

export type SelectOptionInternalProps = {
  // ActionSurface
  tagRef: ActionSurfaceProps['tagRef']
  tagAttrs: ActionSurfaceProps['tagAttrs']
  selected: ActionSurfaceProps['selected']
  // Select
  variant: SelectProps['variant']
  intent: SelectProps['intent']
  color: SelectProps['color']
  size: SelectProps['size']
  // own
  isOpeningDownwards: boolean
  isFirst: boolean
  isLast: boolean
}
