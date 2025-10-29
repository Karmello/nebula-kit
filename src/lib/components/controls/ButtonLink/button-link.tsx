import { MouseEvent } from 'react'

import { Button } from 'lib/components'

import {
  DEFAULT_BUTTON_LINK_INTENT,
  DEFAULT_BUTTON_LINK_TARGET,
  DEFAULT_BUTTON_LINK_VARIANT,
  ButtonLinkProps,
} from './definitions'

export const ButtonLink = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
  // Button
  variant = DEFAULT_BUTTON_LINK_VARIANT,
  intent = DEFAULT_BUTTON_LINK_INTENT,
  labelIntent,
  size,
  fullWidth,
  iconName,
  iconPosition,
  // own
  href,
  target = DEFAULT_BUTTON_LINK_TARGET,
  onClick,
}: ButtonLinkProps) => {
  const finalOnClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault()
      onClick(e)
    }
  }

  return (
    <Button
      tag="a"
      tagAttrs={{
        ...tagAttrs,
        href,
        target,
        onClick: finalOnClick,
      }}
      tagRef={tagRef}
      variant={variant}
      intent={intent}
      labelIntent={labelIntent}
      size={size}
      fullWidth={fullWidth}
      iconName={iconName}
      iconPosition={iconPosition}
    >
      {children}
    </Button>
  )
}

ButtonLink.displayName = 'ButtonLink'
