import classNames from 'classnames'

import { updateDomStaticDataset } from 'lib/service'
import { withPrefix } from 'lib/helpers'
import { Box } from 'lib/components'
import { BOX_BORDER_WIDTH } from 'lib/components/core/base/Box/definitions'

import { useAppFrameContext } from '../../AppFrameProvider'
import { AppFrameHeaderProps, DEFAULT_APP_FRAME_HEADER_INTENT } from './definitions'

import './app-frame-header.scss'

export const AppFrameHeader = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
  // Box
  color,
  intent = DEFAULT_APP_FRAME_HEADER_INTENT,
  // Box
  ...paddings
}: AppFrameHeaderProps) => {
  const { stickyHeader } = useAppFrameContext()

  return (
    <Box
      tag="header"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('app-frame-header'), tagAttrs?.className),
        ...updateDomStaticDataset('AppFrameHeader', { stickyHeader }),
      }}
      tagRef={tagRef}
      drawable
      variant="outline"
      color={color}
      intent={intent}
      borderWidth="0px"
      borderRadius="0px"
      borderBottomWidth={BOX_BORDER_WIDTH}
      elevated
    >
      <Box drawable borderRadius="0px" variant="solid" color={color} intent={intent} {...paddings}>
        {children}
      </Box>
    </Box>
  )
}

AppFrameHeader.displayName = 'AppFrame.Header'
