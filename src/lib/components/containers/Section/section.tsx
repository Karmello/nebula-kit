import { Box, Divider, SectionProps, Spacer, Text } from 'lib/components'

import { SectionTag } from './definitions'

export const Section = <T extends SectionTag = 'section'>({
  // HtmlTag
  tag = 'section' as T,
  tagAttrs,
  tagRef,
  children,
  // Box
  variant,
  intent,
  borderRadius,
  padding,
  paddingInline,
  paddingBlock,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  // own
  heading,
  hideDivider = false,
}: SectionProps<T>) => {
  return (
    <Box
      tag={tag}
      tagAttrs={tagAttrs}
      tagRef={tagRef}
      variant={variant}
      intent={intent}
      borderRadius={borderRadius}
      padding={padding}
      paddingInline={paddingInline}
      paddingBlock={paddingBlock}
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
    >
      {typeof heading === 'string' ? <Text typography="h6">{heading}</Text> : heading}
      {!hideDivider ? <Divider /> : null}
      {children ? (
        <>
          <Spacer blockSize={10} />
          {children}
        </>
      ) : null}
    </Box>
  )
}

Section.displayName = 'Section'
