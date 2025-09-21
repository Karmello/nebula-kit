import { ComponentProps, PropsWithoutRef } from 'react'
import classNames from 'classnames'

import { Button } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { ButtonTag } from '../Button/definitions'
import { IconButtonProps } from './definitions'

import './icon-button.scss'

export const IconButton = <T extends ButtonTag = 'button'>({
  tag,
  tagAttrs,
  tagRef,
  size,
  variant,
  intent,
  disabled,
  iconName,
}: IconButtonProps<T>) => {
  return (
    <Button
      tag={tag || 'button'}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(withPrefix('icon-btn'), tagAttrs?.className || ''),
        } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={tagRef}
      size={size}
      variant={variant}
      intent={intent}
      disabled={disabled}
      iconName={iconName}
    >
      {''}
    </Button>
  )
}

IconButton.displayName = 'IconButton'
