import { Box, Divider, SectionProps, Spacer, Text } from 'lib/components'

import { SectionTag } from './definitions'

export const Section = <T extends SectionTag = 'section'>({
  tag,
  heading,
  hideDivider = false,
  children,
  ...boxProps
}: SectionProps<T>) => {
  return (
    <Box tag={tag || ('section' as any)} {...boxProps}>
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
