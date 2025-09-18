import { ButtonElem, MakeRequired } from 'lib/definitions'

import { ButtonProps } from '../Button'

export const ICON_BUTTON_INHERITED_PROPS = {
  Button: [
    'elem',
    'elemProps',
    'elemRef',
    'size',
    'variant',
    'intent',
    'disabled',
    'iconName',
  ] as const satisfies readonly (keyof ButtonProps<ButtonElem>)[],
}

export type IconButtonInheritedProps<E extends ButtonElem = 'button'> = MakeRequired<
  Pick<ButtonProps<E>, (typeof ICON_BUTTON_INHERITED_PROPS)['Button'][number]>,
  'iconName'
>

export type IconButtonProps<E extends ButtonElem = 'button'> = IconButtonInheritedProps<E>
