import { MouseEvent } from 'react'

import { Button, IconButton } from 'lib/components'

import {
  DEFAULT_LINK_BUTTON_ICONNAME,
  DEFAULT_LINK_BUTTON_INTENT,
  DEFAULT_LINK_BUTTON_LABEL_INTENT,
  DEFAULT_LINK_BUTTON_TARGET,
  DEFAULT_LINK_BUTTON_VARIANT,
  LinkButtonProps,
} from './definitions'

export const LinkButton = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
  // Button
  variant = DEFAULT_LINK_BUTTON_VARIANT,
  intent = DEFAULT_LINK_BUTTON_INTENT,
  labelIntent = DEFAULT_LINK_BUTTON_LABEL_INTENT,
  size,
  iconName,
  // own
  href,
  target = DEFAULT_LINK_BUTTON_TARGET,
  onClick,
}: LinkButtonProps) => {
  const finalOnClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault()
      onClick(e)
    }
  }

  if (children !== undefined) {
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
        iconName={iconName}
        iconPosition="right"
      >
        {children}
      </Button>
    )
  } else {
    return (
      <IconButton
        tag="a"
        tagAttrs={{ ...tagAttrs, href, target, onClick: finalOnClick }}
        tagRef={tagRef}
        variant={variant}
        intent={intent}
        labelIntent={labelIntent}
        size={size}
        iconName={iconName || DEFAULT_LINK_BUTTON_ICONNAME}
      />
    )
  }
}

LinkButton.displayName = 'LinkButton'
