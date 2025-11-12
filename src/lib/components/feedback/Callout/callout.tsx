import { ComponentProps, PropsWithoutRef } from 'react'
import classNames from 'classnames'

import { Box, Spacer, Text } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import {
  CalloutProps,
  CalloutTag,
  DEFAULT_CALLOUT_VARIANT,
  DEFAULT_CALLOUT_STATUS,
  DEFAULT_CALLOUT_SIZE,
  DEFAULT_CALLOUT_INTENT,
  CALLOUT_CONFIG,
  CALLOUT_SIZE_CONFIG,
} from './definitions'

export const Callout = <T extends CalloutTag = 'div'>({
  tag,
  tagAttrs,
  tagRef,
  // Box
  size = DEFAULT_CALLOUT_SIZE,
  variant = DEFAULT_CALLOUT_VARIANT,
  intent = DEFAULT_CALLOUT_INTENT,
  // own
  content,
  heading,
  status = DEFAULT_CALLOUT_STATUS,
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
      color={CALLOUT_CONFIG[status || 'info'].color}
      intent={intent}
      padding={CALLOUT_SIZE_CONFIG[size || 'md'].spacing}
    >
      <Text
        typography={CALLOUT_SIZE_CONFIG[size || 'md'].typography}
        iconName={CALLOUT_CONFIG[status || 'info'].iconName}
      >
        {heading || CALLOUT_CONFIG[status || 'info'].heading}
      </Text>
      <Spacer blockSize={CALLOUT_SIZE_CONFIG[size || 'md'].spacing} />
      <Text>{content}</Text>
    </Box>
  )
}

Callout.displayName = 'Callout'
