import { MakeRequired } from 'lib/definitions'

import { ButtonProps } from '../Button'

export const ICON_BUTTON_INHERITED_PROPS = {
  Button: [
    'elemProps',
    'elemRef',
    'size',
    'variant',
    'intent',
    'disabled',
    'iconName',
  ] as const satisfies readonly (keyof ButtonProps)[],
}

export type IconButtonInheritedProps = MakeRequired<
  Pick<ButtonProps, (typeof ICON_BUTTON_INHERITED_PROPS)['Button'][number]>,
  'iconName'
>

export type IconButtonProps = IconButtonInheritedProps
