import { ButtonProps } from 'lib/components'
import { ButtonTag } from 'lib/components/core/controls/Button/definitions'

export type DropdownListItemProps<T extends ButtonTag = 'button'> = Pick<
  ButtonProps<T>,
  'bold' | 'disabled' | 'iconName' | 'iconPosition' | 'justifyContent' | 'tagAttrs' | 'tagRef'
> & {
  children: ButtonProps<T>['children']
}
