import { ActionSurfaceProps, BoxProps } from 'lib/components'
import { DropdownListProps } from 'lib/components/shared'
import { ControlSize } from 'lib/definitions'

export const DEFAULT_SELECT_INLINE_SIZE: SelectProps['inlineSize'] = '100%'
export const DEFAULT_SELECT_INTENT: SelectProps['intent'] = 'tertiary'

type SelectOwnProps = {
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  size?: ControlSize
  dropdownPlacement?: DropdownListProps['placement']
  staticLabel?: string
}

type PropsFromBox = Pick<BoxProps<'div'>, 'inlineSize' | 'disabled'> & {
  children: BoxProps<'div'>['children']
}

type PropsFromActionSurface = Pick<ActionSurfaceProps, 'intent' | 'color'>

type PropsFromDropdownList = Pick<DropdownListProps, 'tagAttrs' | 'tagRef' | 'scrollAlign' | 'visibleItemsCount'>

export type SelectProps = PropsFromBox & PropsFromActionSurface & PropsFromDropdownList & SelectOwnProps
