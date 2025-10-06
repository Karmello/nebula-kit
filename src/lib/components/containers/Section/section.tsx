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
  intent = DEFAULT_SECTION_INTENT,
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
      variant={variant}
      intent={intent}
      borderRadius={variant === 'ghost' ? 0 : undefined}
      padding={variant === 'outline' ? SECTION_SIZE_CONFIG[size].spacing : 0}
      maxInlineSize="100%"
      overflowX="auto"
      overflowY="hidden"
    >
      <Text typography={SECTION_SIZE_CONFIG[size].typography}>{heading}</Text>
      <Divider />
      {children ? (
        <>
          <Spacer blockSize={SECTION_SIZE_CONFIG[size].spacing} />
          {children}
        </>
      ) : null}
    </Box>
  )
}

Section.displayName = 'Section'
