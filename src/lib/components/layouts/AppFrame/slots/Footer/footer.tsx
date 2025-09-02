import { Box, BoxProps } from 'lib/components'
import { Slot } from 'lib/definitions'

export const Footer = (props: Omit<BoxProps<'footer'>, 'elem'>) => {
  return <Box elem="footer" variant="solid" intent="tertiary" {...props} />
}

Footer.slotName = Slot.footer

// const Test = () => {
//   return <Footer>app frame footer</Footer>
// }
