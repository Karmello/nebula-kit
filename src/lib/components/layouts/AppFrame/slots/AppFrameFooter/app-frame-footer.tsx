import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { useNebkitStore } from 'lib/state'

import {
  AppFrameFooterProps,
  DEFAULT_APP_FRAME_FOOTER_BORDER_INTENT,
  DEFAULT_APP_FRAME_FOOTER_INTENT,
} from './definitions'

export const AppFrameFooter = ({
  children,
  tagAttrs,
  tagRef,
  intent = DEFAULT_APP_FRAME_FOOTER_INTENT,
  borderIntent = DEFAULT_APP_FRAME_FOOTER_BORDER_INTENT,
  ...paddings
}: AppFrameFooterProps) => {
  const { borderWidth } = useNebkitStore()

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
      borderIntent={borderIntent}
      borderTopWidth={borderWidth}
      borderRadius={0}
      {...paddings}
    >
      {children}
    </Box>
  )
}

AppFrameFooter.displayName = 'AppFrame.Footer'
