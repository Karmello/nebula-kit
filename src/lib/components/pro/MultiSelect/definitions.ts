import { DropdownListProps } from 'lib/components/shared'
import { BoxProps } from 'lib/index.core'
import { TShirtSize } from 'lib/types'

export const DEFAULT_MULTI_SELECT_INLINE_SIZE: MultiSelectProps['inlineSize'] = '100%'

type MultiSelectOwnProps = {
  defaultValue?: string[]
  value?: string[]
  onChange?: (value: string[]) => void
  size?: TShirtSize
  dropdownPlacement?: DropdownListProps['placement']
}

type PropsFromBox = {
  inlineSize?: BoxProps<'div'>['inlineSize']
  disabled?: BoxProps<'div'>['disabled']
  children: BoxProps<'div'>['children']
}

type PropsFromDropdownList = {
  tagAttrs?: DropdownListProps['tagAttrs']
  tagRef?: DropdownListProps['tagRef']
  color?: DropdownListProps['color']
  intent?: DropdownListProps['intent']
  scrollAlign?: DropdownListProps['scrollAlign']
  visibleItemsCount?: DropdownListProps['visibleItemsCount']
}

export type MultiSelectProps = PropsFromBox & PropsFromDropdownList & MultiSelectOwnProps
