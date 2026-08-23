import { DropdownListProps } from 'lib/components/shared'
import { BoxProps } from 'lib/index.core'
import { TShirtSize } from 'lib/types'

export type MultiSelectProps = {
  // own
  defaultValue?: string[]
  value?: string[]
  onChange?: (value: string[]) => void
  size?: TShirtSize
  dropdownPlacement?: DropdownListProps['placement']
  // Box
  inlineSize?: BoxProps<'div'>['inlineSize']
  disabled?: BoxProps<'div'>['disabled']
  children: BoxProps<'div'>['children']
  // DropdownList
  tagAttrs?: DropdownListProps['tagAttrs']
  tagRef?: DropdownListProps['tagRef']
  color?: DropdownListProps['color']
  intent?: DropdownListProps['intent']
  scrollAlign?: DropdownListProps['scrollAlign']
  visibleItemsCount?: DropdownListProps['visibleItemsCount']
}
