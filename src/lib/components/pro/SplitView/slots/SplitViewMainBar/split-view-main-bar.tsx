import { Box } from 'lib/components/core/Box'

import { type SplitViewMainBarProps } from './types'

export const SplitViewMainBar = ({ children, elemAttrs, elemRef }: SplitViewMainBarProps) => {
  return (
    <Box elemRef={elemRef} elemAttrs={elemAttrs} inlineSize="100%">
      {children}
    </Box>
  )
}

SplitViewMainBar.displayName = 'SplitView.MainBar'
