import { ButtonProps } from 'lib/components'
import { ButtonTag } from 'lib/components/core/Button/definitions'

export const DEFAULT_DROPDOWN_LIST_ITEM_ALIGN: DropdownListItemProps['align'] = 'start'

export type DropdownListItemProps<T extends ButtonTag = 'button'> = Pick<
  ButtonProps<T>,
  'bold' | 'selected' | 'disabled' | 'iconName' | 'iconPlacement' | 'align' | 'tag' | 'tagAttrs' | 'tagRef'
> & {
  children: ButtonProps<T>['children']
}
