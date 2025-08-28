import { Box, BoxProps } from 'lib/components'
import { Slot } from 'lib/definitions'

export const Footer = (props: Omit<BoxProps, 'as'>) => {
  return <Box {...props} as="footer" />
}

Footer.slotName = Slot.footer
