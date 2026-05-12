import { ButtonProps } from 'lib/components'
import { ButtonTag } from 'lib/components/core/controls/Button/definitions'

export const DEFAULT_DROPDOWN_LIST_ITEM_TEXT_ALIGN: DropdownListItemProps['textAlign'] = 'left'

export type DropdownListItemProps<T extends ButtonTag = 'button'> = Pick<
  ButtonProps<T>,
  'bold' | 'selected' | 'disabled' | 'iconName' | 'iconPlacement' | 'justifyContent' | 'tag' | 'tagAttrs' | 'tagRef' | 'textAlign'
> & {
  children: ButtonProps<T>['children']
}
