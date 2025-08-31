import { ComponentPropsWithRef, ReactNode } from 'react'

import { Box, BoxOwnProps, Divider, Spacer, Text, TextOwnProps } from 'lib/components'

export type SectionOwnProps = ComponentPropsWithRef<'section'> &
  BoxOwnProps & {
    children?: ReactNode
    heading: string
    headingProps?: Omit<TextOwnProps, 'children'>
  }

export const Section = ({ children, heading, headingProps, ...rest }: SectionOwnProps) => {
  return (
    <Box {...rest} as="section">
      <Text typography="h5" {...headingProps}>
        {heading}
      </Text>
      <Divider />
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
