import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { AppFrameMainProps } from './definitions'

import './app-frame-main.scss'

export const AppFrameMain = ({ children, elemProps, elemRef, ...paddings }: AppFrameMainProps) => {
  return (
    <Box
      elem="main"
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('app-frame-main'), elemProps?.className),
      }}
      elemRef={elemRef}
      borderRadius={0}
      {...paddings}
    >
      {children}
    </Box>
  )
}

AppFrameMain.displayName = 'AppFrame.Main'
AppFrameMain.slotName = 'Main'
