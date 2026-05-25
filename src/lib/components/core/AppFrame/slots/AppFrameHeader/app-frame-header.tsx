import classNames from 'classnames'

import { buildStaticDataset } from 'lib/internals/dom'
import { withPrefix } from 'lib/helpers'
import { Box } from 'lib/components'

import { useAppFrameContext } from '../../AppFrameProvider'
import { AppFrameHeaderProps, DEFAULT_APP_FRAME_HEADER_INTENT } from './definitions'

import './app-frame-header.scss'

export const AppFrameHeader = ({
  // Box
  children,
  tagAttrs,
  tagRef,
  color,
  intent = DEFAULT_APP_FRAME_HEADER_INTENT,
  ...paddings
}: AppFrameHeaderProps) => {
  const { stickyHeader } = useAppFrameContext()

  return (
    <Box
      tag="header"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('app-frame-header'), tagAttrs?.className),
        ...buildStaticDataset('AppFrameHeader', { stickyHeader }),
      }}
      tagRef={tagRef}
      drawable
      variant="outline"
      color={color}
      intent={intent}
      borderWidth="0px"
      borderRadius="0px"
      borderBottomWidth="var(--neb-length-3xs)"
      surface="dividing"
    >
      <Box drawable borderRadius="0px" variant="solid" color={color} intent={intent} {...paddings}>
        {children}
      </Box>
    </Box>
  )
}

AppFrameHeader.displayName = 'AppFrame.Header'
