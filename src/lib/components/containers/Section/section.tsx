import { ReactNode } from 'react'

import { Box, BoxProps, Divider, Spacer, Text, TextProps } from 'lib/components'

export type SectionOwnProps = Omit<BoxProps, 'as' | 'children'> & {
  children: ReactNode
  heading: string
  headingProps?: Omit<TextProps, 'children'>
}

export const Section = ({ children, heading, headingProps, ...rest }: SectionOwnProps) => {
  return (
    <Box {...rest} as="section">
      <Text typography="h5" {...headingProps}>
        {heading}
      </Text>
      <Divider />
      <Spacer size={10} />
      {children}
      <Spacer size={20} />
    </Box>
  )
}
