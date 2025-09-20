import classNames from 'classnames'

import { applyStaticDataset } from 'lib/service'
import { withPrefix } from 'lib/helpers'
import { Box } from 'lib/components'

import { useAppFrameContext } from '../../AppFrameProvider'
import { AppFrameHeaderProps } from './definitions'

import './app-frame-header.scss'

export const AppFrameHeader = ({
  children,
  elemProps,
  elemRef,
  intent = 'secondary',
  minBlockSize = 22,
  ...paddings
}: AppFrameHeaderProps) => {
  const { stickyHeader } = useAppFrameContext()

  return (
    <Box
      elem="header"
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('app-frame-header'), elemProps?.className),
        ...applyStaticDataset('app-frame-header', { stickyHeader }),
      }}
      elemRef={elemRef}
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

AppFrameHeader.displayName = 'AppFrame.Header'
AppFrameHeader.slotName = 'Header'
