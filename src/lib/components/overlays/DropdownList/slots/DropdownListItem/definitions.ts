import { ButtonProps } from 'lib/components'
import { ButtonTag } from 'lib/components/controls/Button/definitions'

export type DropdownListItemProps<T extends ButtonTag = 'button'> = Omit<
  ButtonProps<T>,
  'children' | 'variant' | 'intent' | 'size' | 'fullWidth' | 'hoveredByDefault' | 'iconAngle'
> & {
  children: ButtonProps<T>['children']
}
