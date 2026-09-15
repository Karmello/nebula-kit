import { Box } from 'lib/components/core/Box'

import { type SplitViewMainBarProps } from './types'

export const SplitViewMainBar = ({ children, tagAttrs, tagRef }: SplitViewMainBarProps) => {
  return (
    <Box tagRef={tagRef} tagAttrs={tagAttrs} inlineSize="100%">
      {children}
    </Box>
  )
}

SplitViewMainBar.displayName = 'SplitView.MainBar'
