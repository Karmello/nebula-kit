import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { SplitViewMainBarProps } from './definitions'

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
