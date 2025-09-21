import { ButtonProps, FlexProps } from 'lib/components'
import { MakeRequired, RespValue } from 'lib/definitions'

import { ButtonTag } from '../Button/definitions'

export const DEFAULT_BUTTON_GROUP_GAP = 3

export const ButtonGroupDirection = ['row', 'column'] as const
export const ButtonGroupTag = ['div', 'nav', 'section', 'aside', 'form', 'fieldset'] as const
export type ButtonGroupTag = (typeof ButtonGroupTag)[number]

export type ButtonGroupDirection = (typeof ButtonGroupDirection)[number]

export type ButtonGroupOwnProps = {
  direction?: RespValue<ButtonGroupDirection>
  stretch?: RespValue<boolean>
  attached?: boolean
}

export const BUTTON_GROUP_INHERITED_PROPS = {
  Flex: [
    'children',
    'tag',
    'tagAttrs',
    'tagRef',
    'gap',
  ] as const satisfies readonly (keyof FlexProps<ButtonGroupTag>)[],
  'Flex.Item': [] as never,
  Button: ['variant', 'intent', 'size'] as const satisfies readonly (keyof ButtonProps<ButtonTag>)[],
}

export type ButtonGroupInheritedProps<T extends ButtonGroupTag = 'div'> = MakeRequired<
  Pick<FlexProps<T>, (typeof BUTTON_GROUP_INHERITED_PROPS)['Flex'][number]>,
  'children'
> &
  Pick<ButtonProps<ButtonTag>, (typeof BUTTON_GROUP_INHERITED_PROPS)['Button'][number]>

export type ButtonGroupProps<T extends ButtonGroupTag = 'div'> = ButtonGroupOwnProps &
  ButtonGroupInheritedProps<T>
