import { Box, BoxProps } from 'lib/components'
import { Slot } from 'lib/definitions'

export const Main = (props: Omit<BoxProps, 'as' | 'minBlockSize' | 'minInlineSize'>) => {
  return <Box {...props} as="main" minBlockSize={0} minInlineSize={0} />
}

Main.slotName = Slot.main
