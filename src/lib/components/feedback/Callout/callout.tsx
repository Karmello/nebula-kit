import { ComponentProps, PropsWithoutRef } from 'react'
import classNames from 'classnames'

import { Box, Spacer, Text } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import {
  CalloutProps,
  CalloutTag,
  CALLOUT_CONFIG,
  DEFAULT_CALLOUT_VARIANT,
  DEFAULT_CALLOUT_INTENT,
  DEFAULT_CALLOUT_SIZE,
  CALLOUT_SIZE_CONFIG,
} from './definitions'

export const Callout = <T extends CalloutTag = 'div'>({
  tag,
  tagAttrs,
  tagRef,
  // own
  content,
  heading,
  // Box
  size = DEFAULT_CALLOUT_SIZE,
  variant = DEFAULT_CALLOUT_VARIANT,
  intent = DEFAULT_CALLOUT_INTENT,
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
      padding={CALLOUT_SIZE_CONFIG[size].spacing}
    >
      <Text typography={CALLOUT_SIZE_CONFIG[size].typography} iconName={CALLOUT_CONFIG[intent].iconName}>
        {heading || CALLOUT_CONFIG[intent].heading}
      </Text>
      <Spacer blockSize={CALLOUT_SIZE_CONFIG[size].spacing} />
      <Text>{content}</Text>
    </Box>
  )
}

Callout.displayName = 'Callout'
