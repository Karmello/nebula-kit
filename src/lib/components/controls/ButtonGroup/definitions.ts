import { ButtonProps, FlexProps } from 'lib/components'
import { CssFlexDirection, MakeRequired, RespValue } from 'lib/definitions'

import { ButtonElem } from '../Button/definitions'

export const ButtonGroupElem = ['div', 'nav', 'section', 'aside', 'form', 'fieldset'] as const
export type ButtonGroupElem = (typeof ButtonGroupElem)[number]

export type ButtonGroupOwnProps = {
  direction?: RespValue<Extract<CssFlexDirection, 'row' | 'column'>>
  stretch?: RespValue<boolean>
  attached?: boolean
}

export const BUTTON_GROUP_INHERITED_PROPS = {
  Flex: [
    'children',
    'elem',
    'elemProps',
    'elemRef',
    'gap',
  ] as const satisfies readonly (keyof FlexProps<ButtonGroupElem>)[],
  'Flex.Item': [] as never,
  Button: ['variant', 'intent', 'size'] as const satisfies readonly (keyof ButtonProps<ButtonElem>)[],
}

export type ButtonGroupInheritedProps<E extends ButtonGroupElem = 'div'> = MakeRequired<
  Pick<FlexProps<E>, (typeof BUTTON_GROUP_INHERITED_PROPS)['Flex'][number]>,
  'children'
> &
  Pick<ButtonProps<ButtonElem>, (typeof BUTTON_GROUP_INHERITED_PROPS)['Button'][number]>

export type ButtonGroupProps<E extends ButtonGroupElem = 'div'> = ButtonGroupOwnProps &
  ButtonGroupInheritedProps<E>
