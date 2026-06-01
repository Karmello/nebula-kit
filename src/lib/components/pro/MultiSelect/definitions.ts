import { BoxProps } from 'lib/components'
import { DropdownListProps } from 'lib/components/shared'
import { ControlSize } from 'lib/types'

export const DEFAULT_MULTI_SELECT_INLINE_SIZE: MultiSelectProps['inlineSize'] = '100%'

type MultiSelectOwnProps = {
  defaultValue?: string[]
  value?: string[]
  onChange?: (value: string[]) => void
  size?: ControlSize
  dropdownPlacement?: DropdownListProps['placement']
}

type PropsFromBox = Pick<BoxProps<'div'>, 'inlineSize' | 'disabled'> & {
  children: BoxProps<'div'>['children']
}

type PropsFromDropdownList = Pick<
  DropdownListProps,
  'tagAttrs' | 'tagRef' | 'color' | 'intent' | 'scrollAlign' | 'visibleItemsCount'
>

export type MultiSelectProps = PropsFromBox & PropsFromDropdownList & MultiSelectOwnProps
