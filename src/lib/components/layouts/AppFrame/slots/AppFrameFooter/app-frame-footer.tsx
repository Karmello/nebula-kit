import { Box } from 'lib/components'

import { AppFrameFooterProps } from './definitions'
import classNames from 'classnames'
import { withPrefix } from 'lib/helpers'

export const AppFrameFooter = ({
  children,
  tagAttrs,
  tagRef,
  intent = 'secondary',
  minBlockSize = 80,
  ...paddings
}: AppFrameFooterProps) => {
  return (
    <Box
      tag="footer"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('app-frame-footer'), tagAttrs?.className),
      }}
      tagRef={tagRef}
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

AppFrameFooter.displayName = 'AppFrame.Footer'
