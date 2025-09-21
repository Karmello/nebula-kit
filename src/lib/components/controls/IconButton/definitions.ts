import { MakeRequired } from 'lib/definitions'

import { ButtonProps } from '../Button'
import { ButtonTag } from '../Button/definitions'

export const ICON_BUTTON_INHERITED_PROPS = {
  Button: [
    'tag',
    'tagAttrs',
    'tagRef',
    'size',
    'variant',
    'intent',
    'disabled',
    'iconName',
  ] as const satisfies readonly (keyof ButtonProps<ButtonTag>)[],
}

export type IconButtonInheritedProps<T extends ButtonTag = 'button'> = MakeRequired<
  Pick<ButtonProps<T>, (typeof ICON_BUTTON_INHERITED_PROPS)['Button'][number]>,
  'iconName'
>

export type IconButtonProps<T extends ButtonTag = 'button'> = IconButtonInheritedProps<T>
