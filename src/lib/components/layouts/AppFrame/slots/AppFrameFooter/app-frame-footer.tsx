import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { useNebkitStore } from 'lib/state'
import { NEBKIT_PROVIDER_SIZES_MAP } from 'lib/components/utility/NebkitProvider/definitions'

import {
  AppFrameFooterProps,
  DEFAULT_APP_FRAME_FOOTER_BORDER_INTENT,
  DEFAULT_APP_FRAME_FOOTER_INTENT,
  DEFAULT_APP_FRAME_FOOTER_MIN_BLOCK_SIZE,
} from './definitions'

export const AppFrameFooter = ({
  children,
  tagAttrs,
  tagRef,
  intent = DEFAULT_APP_FRAME_FOOTER_INTENT,
  borderIntent = DEFAULT_APP_FRAME_FOOTER_BORDER_INTENT,
  minBlockSize = DEFAULT_APP_FRAME_FOOTER_MIN_BLOCK_SIZE,
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
      minBlockSize={minBlockSize}
      borderTopWidth={NEBKIT_PROVIDER_SIZES_MAP.borderWidth[borderWidth]}
      borderRadius={0}
      {...paddings}
    >
      {children}
    </Box>
  )
}

AppFrameFooter.displayName = 'AppFrame.Footer'
