import { ButtonProps } from '../Button'

export const ICON_BUTTON_INHERITED_PROPS = {
  Button: [
    'size',
    'textIntent',
    'elemProps',
    'elemRef',
    'variant',
    'intent',
    'borderRadius',
    'disabled',
    'display',
    'position',
    'top',
    'right',
    'bottom',
    'left',
    'inlineSize',
    'minInlineSize',
    'maxInlineSize',
    'margin',
    'marginInline',
    'marginBlock',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'bold',
    'iconName',
  ] as const satisfies readonly (keyof ButtonProps)[],
}

export type IconButtonInheritedProps = Pick<
  ButtonProps,
  (typeof ICON_BUTTON_INHERITED_PROPS)['Button'][number]
>

export type IconButtonProps = IconButtonInheritedProps
