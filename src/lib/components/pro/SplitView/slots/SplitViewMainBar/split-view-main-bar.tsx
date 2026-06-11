import { Box } from 'lib/index.core'

import { type SplitViewMainBarProps } from './definitions'

export const SplitViewMainBar = ({ children, tagAttrs, tagRef }: SplitViewMainBarProps) => {
  return (
    <Box tagRef={tagRef} tagAttrs={tagAttrs} inlineSize="100%">
      {children}
    </Box>
  )
}

SplitViewMainBar.displayName = 'SplitView.MainBar'
