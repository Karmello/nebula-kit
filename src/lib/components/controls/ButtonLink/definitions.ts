import { HTMLAttributeAnchorTarget, MouseEventHandler } from 'react'

import { HtmlTagProps } from 'lib/components'

import { ButtonProps } from '../Button'

export const DEFAULT_BUTTON_LINK_TARGET: ButtonLinkProps['target'] = '_self'
export const DEFAULT_BUTTON_LINK_INTENT: ButtonLinkProps['intent'] = 'tertiary'
export const DEFAULT_BUTTON_LINK_VARIANT: ButtonLinkProps['variant'] = 'solid'

type ButtonLinkOwnProps = {
  href: string
  target?: HTMLAttributeAnchorTarget
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'a'>, 'children' | 'tagAttrs' | 'tagRef'>

type PropsFromButton = Pick<
  ButtonProps<'a'>,
  'variant' | 'intent' | 'labelIntent' | 'size' | 'fullWidth' | 'iconName' | 'iconPosition'
>

export type ButtonLinkProps = PropsFromHtmlTag & PropsFromButton & ButtonLinkOwnProps
