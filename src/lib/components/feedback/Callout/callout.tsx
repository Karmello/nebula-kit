import { ComponentProps, PropsWithoutRef } from 'react'
import classNames from 'classnames'

import { Box, Spacer, Text } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import {
  CalloutProps,
  CALLOUT_CONFIG,
  DEFAULT_CALLOUT_VARIANT,
  DEFAULT_CALLOUT_INTENT,
  CalloutTag,
} from './definitions'

import './callout.scss'

export const Callout = <T extends CalloutTag = 'div'>({
  tag,
  tagAttrs,
  tagRef,
  // own
  content,
  heading,
  // Box
  variant = DEFAULT_CALLOUT_VARIANT,
  intent = DEFAULT_CALLOUT_INTENT,
  borderRadius,
  ...paddings
}: CalloutProps<T>) => {
  return (
    <Box
      tag={tag}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(withPrefix('callout'), tagAttrs?.className),
        } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={tagRef}
      variant={variant}
      intent={intent}
      borderRadius={borderRadius}
      padding={10}
      {...paddings}
    >
      <Text intent="neutral" typography="h5" iconName={CALLOUT_CONFIG[intent].iconName}>
        {heading || CALLOUT_CONFIG[intent].heading}
      </Text>
      <Spacer blockSize={5} />
      <Text intent="neutral">{content}</Text>
    </Box>
  )
}

Callout.displayName = 'Callout'
