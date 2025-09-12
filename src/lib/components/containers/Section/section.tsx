import { Box, Divider, SectionProps, Spacer, Text } from 'lib/components'
import { SectionElem } from 'lib/definitions'

export const Section = <E extends SectionElem = 'section'>({
  elem,
  heading,
  hideDivider = false,
  children,
  ...boxProps
}: SectionProps<E>) => {
  return (
    <Box elem={elem || ('section' as any)} {...boxProps}>
      {typeof heading === 'string' ? <Text typography="h6">{heading}</Text> : heading}
      {!hideDivider ? <Divider /> : null}
      {children ? (
        <>
          <Spacer size={10} />
          {children}
        </>
      ) : null}
    </Box>
  )
}
