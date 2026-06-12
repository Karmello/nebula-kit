import { ComponentProps, PropsWithoutRef } from 'react'
import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'
import { Divider, SectionProps, Spacer, Text, Title } from 'lib/index.core'
import { SectionTag } from 'lib/types'

import { Box } from '../Box'
import { DEFAULT_SECTION_INTENT, DEFAULT_SECTION_SIZE, DEFAULT_SECTION_VARIANT, SECTION_SIZE_CONFIG } from './definitions'

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
  // Title
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
      <Title
        typography={SECTION_SIZE_CONFIG[size || 'md'].textTypography as any}
        iconName={iconName}
        iconPlacement={iconPlacement}
      >
        <Text typography={SECTION_SIZE_CONFIG[size || 'md'].textTypography} color={color} intent={headingIntent} bold>
          {heading}
        </Text>
      </Title>
      <Divider color={color} marginTop="4px" />
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
