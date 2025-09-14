import { Box } from 'lib/components'

import { AppFrameFooterProps } from './definitions'
import classNames from 'classnames'
import { withPrefix } from 'lib/helpers'

export const Footer = ({
  children,
  elemProps,
  elemRef,
  intent = 'secondary',
  minBlockSize = 80,
  ...paddings
}: AppFrameFooterProps) => {
  return (
    <Box
      elem="footer"
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('app-frame-footer'), elemProps?.className),
      }}
      elemRef={elemRef}
      variant="solid"
      intent={intent}
      minBlockSize={minBlockSize}
      borderRadius={0}
      {...paddings}
    >
      {children}
    </Box>
  )
}

Footer.displayName = 'AppFrame.Footer'
Footer.slotName = 'Footer'
