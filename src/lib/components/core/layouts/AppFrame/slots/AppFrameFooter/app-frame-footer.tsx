import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { BOX_BORDER_WIDTH } from 'lib/components/core/base/Box/definitions'

import {
  AppFrameFooterProps,
  DEFAULT_APP_FRAME_FOOTER_BORDER_INTENT,
  DEFAULT_APP_FRAME_FOOTER_INTENT,
} from './definitions'

export const AppFrameFooter = ({
  children,
  tagAttrs,
  tagRef,
  color,
  intent = DEFAULT_APP_FRAME_FOOTER_INTENT,
  borderIntent = DEFAULT_APP_FRAME_FOOTER_BORDER_INTENT,
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
      color={color}
      intent={intent}
      borderIntent={borderIntent}
      borderWidth="0px"
      borderTopWidth={BOX_BORDER_WIDTH}
      borderRadius="0px"
      {...paddings}
    >
      {children}
    </Box>
  )
}

AppFrameFooter.displayName = 'AppFrame.Footer'
