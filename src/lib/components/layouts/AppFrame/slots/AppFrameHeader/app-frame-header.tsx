import classNames from 'classnames'

import { applyStaticDataset } from 'lib/service'
import { withPrefix } from 'lib/helpers'
import { Box } from 'lib/components'
import { BUTTON_SIZE_CONFIG, DEFAULT_BUTTON_SIZE } from 'lib/components/controls/Button/definitions'

import { useAppFrameContext } from '../../AppFrameProvider'
import { AppFrameHeaderProps } from './definitions'

import './app-frame-header.scss'

export const AppFrameHeader = ({
  children,
  tagAttrs,
  tagRef,
  intent = 'secondary',
  minBlockSize = BUTTON_SIZE_CONFIG[DEFAULT_BUTTON_SIZE].blockSize,
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
