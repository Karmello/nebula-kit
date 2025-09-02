import { Box, BoxProps, Divider, Spacer, Text, TextOwnProps } from 'lib/components'

export type SectionOwnProps = {
  heading: string
  headingProps?: Omit<TextOwnProps, 'children'>
  hideDivider?: boolean
}

export type SectionProps = Omit<BoxProps, 'elem'> & SectionOwnProps

export const Section = ({
  heading,
  headingProps,
  hideDivider = false,
  children,
  ...boxProps
}: SectionProps) => {
  return (
    <Box elem="section" {...boxProps}>
      <Text typography="h5" {...headingProps}>
        {heading}
      </Text>
      {!hideDivider ? <Divider /> : null}
      {children ? (
        <>
          <Spacer size={10} />
          {children}
          <Spacer size={20} />
        </>
      ) : null}
    </Box>
  )
}
