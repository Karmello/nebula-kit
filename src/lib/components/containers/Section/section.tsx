import { Box, BoxProps, Divider, Spacer, Text, TextOwnProps } from 'lib/components'
import { SectionElem } from 'lib/definitions'

export type SectionElemUnion = `${SectionElem}`

export type SectionOwnProps = {
  heading: string
  headingProps?: Omit<TextOwnProps, 'children'>
  hideDivider?: boolean
}

export type SectionProps<E extends SectionElemUnion> = BoxProps<E> & SectionOwnProps

export const Section = <E extends SectionElemUnion = 'section'>({
  elem,
  heading,
  headingProps,
  hideDivider = false,
  children,
  ...boxProps
}: SectionProps<E>) => {
  return (
    <Box elem={elem || 'section'} {...boxProps}>
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
