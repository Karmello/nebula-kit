import { BoxProps, DropdownListProps } from 'lib/components'

export const DEFAULT_SELECT_INLINE_SIZE: SelectProps['inlineSize'] = '100%'

type SelectOwnProps = {
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  dropdownPlacement?: DropdownListProps['placement']
  staticLabel?: string
}

type PropsFromBox = Pick<BoxProps<'div'>, 'inlineSize' | 'disabled'> & {
  children: BoxProps<'div'>['children']
}

type PropsFromDropdownList = Pick<
  DropdownListProps,
  'tagAttrs' | 'tagRef' | 'color' | 'size' | 'intent' | 'scrollAlign' | 'visibleItemsCount'
>

export type SelectProps = PropsFromBox & PropsFromDropdownList & SelectOwnProps
