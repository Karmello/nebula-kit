import { ComponentPropsWithRef } from 'react'

import { Box, BoxOwnProps } from 'lib/components'
import { Slot } from 'lib/definitions'

export const Footer = (props: ComponentPropsWithRef<'footer'> & BoxOwnProps) => {
  return <Box {...props} as="footer" />
}

Footer.slotName = Slot.footer
