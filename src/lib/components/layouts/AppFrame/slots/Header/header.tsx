import classNames from 'classnames'

import { getDataAttrs, withPrefix } from 'lib/helpers'
import { Box } from 'lib/components'

import { useAppFrameContext } from '../../AppFrameProvider'
import { AppFrameHeaderProps } from './definitions'

import './header.scss'

export const Header = ({
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
        ...getDataAttrs('app-frame-header', { stickyHeader }),
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

Header.displayName = 'AppFrame.Header'
Header.slotName = 'Header'
