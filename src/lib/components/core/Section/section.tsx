import { ComponentProps, PropsWithoutRef } from 'react'
import classNames from 'classnames'

import { Box, Divider, SectionProps, Spacer, Text, WithIcon } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import type { SectionTag } from '../../../types'
import { DEFAULT_SECTION_INTENT, DEFAULT_SECTION_SIZE, DEFAULT_SECTION_VARIANT,SECTION_SIZE_CONFIG } from './definitions'

export const Section = <T extends SectionTag = 'section'>({
  // Box
  tag = 'section' as T,
  tagAttrs,
  tagRef,
  children,
  variant = DEFAULT_SECTION_VARIANT,
  color,
  intent = DEFAULT_SECTION_INTENT,
  interactive,
  // WithIcon
  iconName,
  iconPlacement,
  // own
  heading,
  headingIntent,
  size = DEFAULT_SECTION_SIZE,
}: SectionProps<T>) => {
  return (
    <Box
      tag={tag}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(withPrefix('section'), tagAttrs?.className),
        } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={tagRef}
      drawable
      interactive={interactive}
      variant={variant}
      color={color}
      intent={intent}
      borderRadius={variant === 'ghost' ? '0px' : 'var(--neb-border-radius)'}
      padding={variant === 'ghost' ? '0px' : SECTION_SIZE_CONFIG[size || 'md'].padding}
      overflowX="auto"
      overflowY="hidden"
      maxInlineSize="100%"
    >
      <WithIcon
        iconTypography={SECTION_SIZE_CONFIG[size || 'md'].textTypography}
        iconName={iconName}
        iconPlacement={iconPlacement}
      >
        <Text typography={SECTION_SIZE_CONFIG[size || 'md'].textTypography} color={color} intent={headingIntent} bold>
          {heading}
        </Text>
      </WithIcon>
      <Divider color={color} marginTop="2xs" />
      {children ? (
        <>
          <Spacer blockSize={SECTION_SIZE_CONFIG[size || 'md'].spacerBlockSize} />
          {children}
        </>
      ) : null}
    </Box>
  )
}

Section.displayName = 'Section'
