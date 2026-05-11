import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { AppFrameFooterProps, DEFAULT_APP_FRAME_FOOTER_INTENT } from './definitions'

export const AppFrameFooter = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
  // Box
  color,
  intent = DEFAULT_APP_FRAME_FOOTER_INTENT,
  // Box
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
      borderTopWidth="var(--neb-size-3xs)"
      surface="dividing"
    >
      <Box drawable borderRadius="0px" variant="solid" color={color} intent={intent} {...paddings}>
        {children}
      </Box>
    </Box>
  )
}

AppFrameFooter.displayName = 'AppFrame.Footer'
