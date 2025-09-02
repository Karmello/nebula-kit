import { Box, BoxProps } from 'lib/components'
import { Slot } from 'lib/definitions'

import '../../app-frame.scss'

export const Footer = (
  props: Pick<
    BoxProps<'footer'>,
    | 'children'
    | 'elemProps'
    | 'elemRef'
    | 'intent'
    | 'blockSize'
    | 'minBlockSize'
    | 'maxBlockSize'
    | 'padding'
    | 'paddingInline'
    | 'paddingBlock'
    | 'paddingTop'
    | 'paddingRight'
    | 'paddingBottom'
    | 'paddingLeft'
  >
) => {
  return (
    <Box variant="solid" intent="secondary" minBlockSize={80} borderRadius={0} {...props} elem="footer" />
  )
}

Footer.slotName = Slot.footer
