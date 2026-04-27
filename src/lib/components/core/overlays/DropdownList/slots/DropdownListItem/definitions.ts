import { ButtonProps } from 'lib/components'
import { ButtonTag } from 'lib/components/core/controls/Button/definitions'

export type DropdownListItemProps<T extends ButtonTag = 'button'> = Pick<
  ButtonProps<T>,
  'bold' | 'selected' | 'disabled' | 'iconName' | 'iconPlacement' | 'justifyContent' | 'tag' | 'tagAttrs' | 'tagRef'
> & {
  children: ButtonProps<T>['children']
}
