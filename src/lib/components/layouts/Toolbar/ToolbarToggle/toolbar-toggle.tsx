import { Box, IconButton } from 'lib/components'

import { useToolbarContext } from '../ToolbarProvider'

export const ToolbarToggle = () => {
  const { switchAt, mainOpen, setMainOpen, isSwitchAtHit } = useToolbarContext()

  return (
    <Box>
      <Box display={{ [String(switchAt)]: 'none' }}>
        <IconButton
          intent="neutral"
          iconName={mainOpen ? 'close' : 'menu'}
          tagAttrs={{
            onClick: () => setMainOpen(!mainOpen),
            'aria-expanded': isSwitchAtHit || mainOpen,
          }}
        />
      </Box>
    </Box>
  )
}
