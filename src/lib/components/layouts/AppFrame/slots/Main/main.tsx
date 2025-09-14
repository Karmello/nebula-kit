import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { AppFrameMainProps } from './definitions'

import './main.scss'

export const Main = ({ children, elemProps, elemRef, ...paddings }: AppFrameMainProps) => {
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

Main.displayName = 'AppFrame.Main'
Main.slotName = 'Main'
