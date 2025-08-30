import { Box, BoxOwnProps } from 'lib/components'
import { Slot } from 'lib/definitions'
import { ComponentPropsWithRef } from 'react'

export const Header = (props: ComponentPropsWithRef<'header'> & BoxOwnProps) => {
  return <Box inlineSize="100%" {...props} as="header" />
}

Header.slotName = Slot.header
