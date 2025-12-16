import { ButtonProps } from 'lib/components'
import { ButtonTag } from 'lib/components/core/controls/Button/definitions'

export type DropdownListItemProps<T extends ButtonTag = 'button'> = Omit<
  ButtonProps<T>,
  'children' | 'variant' | 'color' | 'intent' | 'size' | 'fullWidth' | 'highlighted' | 'iconAngle' | 'loading'
> & {
  children: ButtonProps<T>['children']
}
