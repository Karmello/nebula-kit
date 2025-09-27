import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { AppFrameMainProps } from './definitions'

import './app-frame-main.scss'

export const AppFrameMain = ({ children, tagAttrs, tagRef, ...paddings }: AppFrameMainProps) => {
  return (
    <Box
      tag="main"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('app-frame-main'), tagAttrs?.className),
      }}
      tagRef={tagRef}
      borderRadius={0}
      {...paddings}
    >
      {children}
    </Box>
  )
}

AppFrameMain.displayName = 'AppFrame.Main'
