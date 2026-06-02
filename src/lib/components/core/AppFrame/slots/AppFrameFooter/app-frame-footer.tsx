import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'
import { Box } from 'lib/index.core'

import { AppFrameFooterProps, DEFAULT_APP_FRAME_FOOTER_INTENT } from './definitions'

export const AppFrameFooter = ({
  // Box
  children,
  tagAttrs,
  tagRef,
  color,
  intent = DEFAULT_APP_FRAME_FOOTER_INTENT,
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
      drawable
      variant="outline"
      color={color}
      intent={intent}
      borderWidth="0px"
      borderRadius="0px"
      borderTopWidth="var(--neb-length-3xs)"
      surface="dividing"
    >
      <Box drawable borderRadius="0px" variant="solid" color={color} intent={intent} {...paddings}>
        {children}
      </Box>
    </Box>
  )
}

AppFrameFooter.displayName = 'AppFrame.Footer'
