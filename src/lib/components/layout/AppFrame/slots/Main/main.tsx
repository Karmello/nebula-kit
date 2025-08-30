import { ComponentPropsWithRef } from 'react'

import { Box, BoxOwnProps } from 'lib/components'
import { Slot } from 'lib/definitions'

export const Main = (props: ComponentPropsWithRef<'main'> & BoxOwnProps) => {
  return <Box minBlockSize={0} minInlineSize={0} {...props} as="main" />
}

Main.slotName = Slot.main
