import { Box, BoxProps } from 'lib/components'
import { Slot } from 'lib/definitions'

export const Header = (props: Omit<BoxProps, 'as' | 'inlineSize'>) => {
  return <Box {...props} as="header" inlineSize="100%" />
}

Header.slotName = Slot.header
