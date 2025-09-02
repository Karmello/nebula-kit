import { Box, BoxProps } from 'lib/components'
import { getDataAttrs } from 'lib/helpers'
import { Slot } from 'lib/definitions'

import { useAppFrame } from '../../AppFrameProvider'

export const Header = (props: Omit<BoxProps<'header'>, 'elem'>) => {
  const { stickyHeader } = useAppFrame()

  return (
    <Box
      elem="header"
      variant="solid"
      intent="tertiary"
      {...props}
      {...getDataAttrs('app-frame-header', { stickyHeader })}
    />
  )
}

Header.slotName = Slot.header
