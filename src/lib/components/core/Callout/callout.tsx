import { ComponentProps, PropsWithoutRef } from 'react'
import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'
import { CalloutProps, Spacer, Text, Title } from 'lib/index.core'
import { CalloutTag } from 'lib/types'

import { Box } from '../Box'
import {
  CALLOUT_CONFIG,
  CALLOUT_SIZE_CONFIG,
  DEFAULT_CALLOUT_INTENT,
  DEFAULT_CALLOUT_SIZE,
  DEFAULT_CALLOUT_STATUS,
  DEFAULT_CALLOUT_VARIANT,
} from './constants'

export const Callout = <T extends CalloutTag = 'div'>({
  // Box
  tag,
  tagAttrs,
  tagRef,
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
      drawable
      variant={variant}
      color={CALLOUT_CONFIG[status || 'info'].color}
      intent={intent}
      borderRadius="var(--neb-border-radius)"
      padding={CALLOUT_SIZE_CONFIG[size || 'md'].padding}
    >
      <Title
        typography={CALLOUT_SIZE_CONFIG[size || 'md'].textTypography as any}
        iconName={CALLOUT_CONFIG[status || 'info'].iconName}
      >
        <Text typography={CALLOUT_SIZE_CONFIG[size || 'md'].textTypography}>
          {heading || CALLOUT_CONFIG[status || 'info'].heading}
        </Text>
      </Title>
      {content ? (
        <>
          <Spacer blockSize={CALLOUT_SIZE_CONFIG[size || 'md'].spacerBlockSize} />
          <Text>{content}</Text>
        </>
      ) : null}
    </Box>
  )
}

Callout.displayName = 'Callout'
