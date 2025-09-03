import { Box } from 'lib/components'
import { LayoutSlotProps, Slot } from 'lib/definitions'

import '../../app-frame.scss'

export const Footer = (props: LayoutSlotProps<'footer'>) => {
  return (
    <Box variant="solid" intent="secondary" minBlockSize={80} borderRadius={0} {...props} elem="footer" />
  )
}

Footer.displayName = 'AppFrame.Footer'
Footer.slotName = Slot.footer
