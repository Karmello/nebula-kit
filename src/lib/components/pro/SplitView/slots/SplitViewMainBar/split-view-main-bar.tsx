import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'
import { Box } from 'lib/index.core'
import { SplitViewMainBarProps } from 'lib/index.pro'

export const SplitViewMainBar = ({ children, tagAttrs, tagRef }: SplitViewMainBarProps) => {
  return (
    <Box
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('split-view-main-bar'), tagAttrs?.className),
      }}
      tagRef={tagRef}
    >
      {children}
    </Box>
  )
}

SplitViewMainBar.displayName = 'SplitView.MainBar'
