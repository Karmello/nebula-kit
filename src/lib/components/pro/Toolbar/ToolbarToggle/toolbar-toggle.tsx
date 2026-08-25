import { Box, IconButton } from 'lib/index.core'

import { useToolbarContext } from '../providers/ToolbarProvider'

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
        scale="md"
        iconName={mainOpen ? 'close' : 'menu'}
        onClick={() => setMainOpen(!mainOpen)}
      />
    </Box>
  )
}
