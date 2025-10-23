import { ComponentProps, PropsWithoutRef } from 'react'
import classNames from 'classnames'

import { Button } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { ButtonTag } from '../Button/definitions'
import { IconButtonProps } from './definitions'

import './icon-button.scss'

export const IconButton = <T extends ButtonTag = 'button'>({
  // HtmlTag
  tag = 'button' as T,
  tagAttrs,
  tagRef,
  // Button
  variant,
  intent,
  labelIntent,
  size,
  disabled,
  iconName,
  borderRadius,
}: IconButtonProps<T>) => {
  return (
    <Button
      tag={tag}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(withPrefix('icon-btn'), tagAttrs?.className || ''),
        } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={tagRef}
      variant={variant}
      intent={intent}
      labelIntent={labelIntent}
      size={size}
      disabled={disabled}
      iconName={iconName}
      borderRadius={borderRadius}
    >
      {''}
    </Button>
  )
}

IconButton.displayName = 'IconButton'
