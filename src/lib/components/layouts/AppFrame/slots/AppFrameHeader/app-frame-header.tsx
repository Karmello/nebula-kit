import classNames from 'classnames'

import { applyStaticDataset } from 'lib/service'
import { withPrefix } from 'lib/helpers'
import { Box } from 'lib/components'
import { useNebkitStore } from 'lib/state'

import { useAppFrameContext } from '../../AppFrameProvider'

import {
  AppFrameHeaderProps,
  DEFAULT_APP_FRAME_HEADER_BORDER_INTENT,
  DEFAULT_APP_FRAME_HEADER_INTENT,
} from './definitions'

import './app-frame-header.scss'

export const AppFrameHeader = ({
  children,
  tagAttrs,
  tagRef,
  color,
  intent = DEFAULT_APP_FRAME_HEADER_INTENT,
  borderIntent = DEFAULT_APP_FRAME_HEADER_BORDER_INTENT,
  ...paddings
}: AppFrameHeaderProps) => {
  const { borderWidth } = useNebkitStore()
  const { stickyHeader } = useAppFrameContext()

  return (
    <Box
      tag="header"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('app-frame-header'), tagAttrs?.className),
        ...applyStaticDataset('app-frame-header', { stickyHeader }),
      }}
      tagRef={tagRef}
      variant="solid"
      color={color}
      intent={intent}
      borderIntent={borderIntent}
      borderWidth={0}
      borderBottomWidth={borderWidth}
      borderRadius={0}
      {...paddings}
    >
      {children}
    </Box>
  )
}

AppFrameHeader.displayName = 'AppFrame.Header'
