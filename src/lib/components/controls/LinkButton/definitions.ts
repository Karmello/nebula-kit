import { HTMLAttributeAnchorTarget, MouseEventHandler } from 'react'

import { HtmlTagProps } from 'lib/components'

import { ButtonProps } from '../Button'

export const DEFAULT_LINK_BUTTON_TARGET: LinkButtonProps['target'] = '_self'
export const DEFAULT_LINK_BUTTON_ICONNAME: LinkButtonProps['iconName'] = 'arrow-right'
export const DEFAULT_LINK_BUTTON_INTENT: LinkButtonProps['intent'] = 'tertiary'
export const DEFAULT_LINK_BUTTON_VARIANT: LinkButtonProps['variant'] = 'solid'

type LinkButtonOwnProps = {
  href: string
  target?: HTMLAttributeAnchorTarget
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'a'>, 'children' | 'tagAttrs' | 'tagRef'>

type PropsFromButton = Pick<
  ButtonProps<'a'>,
  'variant' | 'intent' | 'labelIntent' | 'size' | 'iconName' | 'borderRadius'
>

export type LinkButtonProps = PropsFromHtmlTag & PropsFromButton & LinkButtonOwnProps
