import classNames from 'classnames'

import { applyStaticDataset } from 'lib/service'
import { withPrefix } from 'lib/helpers'
import { Box } from 'lib/components'
import { BOX_BORDER_WIDTH } from 'lib/components/core/base/Box/definitions'

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
      drawable
      variant="solid"
      color={color}
      intent={intent}
      borderIntent={borderIntent}
      borderWidth="0px"
      borderBottomWidth={BOX_BORDER_WIDTH}
      {...paddings}
    >
      {children}
    </Box>
  )
}

AppFrameHeader.displayName = 'AppFrame.Header'
