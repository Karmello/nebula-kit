import { ComponentProps, PropsWithoutRef } from 'react'
import classNames from 'classnames'

import { Box, Divider, SectionProps, Spacer, Text } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import {
  SECTION_SIZE_CONFIG,
  DEFAULT_SECTION_SIZE,
  DEFAULT_SECTION_INTENT,
  DEFAULT_SECTION_VARIANT,
  SectionTag,
} from './definitions'

export const Section = <T extends SectionTag = 'section'>({
  // HtmlTag
  tag = 'section' as T,
  tagAttrs,
  tagRef,
  children,
  // Box
  variant = DEFAULT_SECTION_VARIANT,
  color,
  intent = DEFAULT_SECTION_INTENT,
  interactive,
  // text
  iconName,
  iconPlacement,
  headingIntent,
  // own
  heading,
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
      padding={variant === 'ghost' ? '0px' : SECTION_SIZE_CONFIG[size].padding}
      maxInlineSize="100%"
      overflowX="auto"
      overflowY="hidden"
    >
      <Text
        typography={SECTION_SIZE_CONFIG[size].textTypography}
        iconName={iconName}
        iconPlacement={iconPlacement}
        color={color}
        intent={headingIntent}
        bold
      >
        {heading}
      </Text>
      <Divider color={color} />
      {children ? (
        <>
          <Spacer blockSize={SECTION_SIZE_CONFIG[size].spacerBlockSize} />
          {children}
        </>
      ) : null}
    </Box>
  )
}

Section.displayName = 'Section'
