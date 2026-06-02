import { Box, IconButton } from 'lib/index.core'

import { useToolbarContext } from '../ToolbarProvider'

export const ToolbarToggle = () => {
  const { switchAt, mainOpen, setMainOpen, isSwitchAtHit } = useToolbarContext()

  return (
    <Box display={{ [String(switchAt)]: 'none' }}>
      <IconButton
        tagAttrs={{
          'aria-expanded': isSwitchAtHit || mainOpen,
        }}
        variant="ghost"
        intent="primary"
        iconName={mainOpen ? 'close' : 'menu'}
        onClick={() => setMainOpen(!mainOpen)}
      />
    </Box>
  )
}
