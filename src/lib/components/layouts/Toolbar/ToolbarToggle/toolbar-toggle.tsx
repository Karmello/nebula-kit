import { Box, IconButton } from 'lib/components'

import { useToolbarContext } from '../ToolbarProvider'

export const ToolbarToggle = () => {
  const { switchAt, mainOpen, setMainOpen } = useToolbarContext()

  return (
    <Box>
      <Box display={{ [String(switchAt)]: 'none' }}>
        <IconButton
          iconName={mainOpen ? 'close' : 'menu'}
          tagAttrs={{ onClick: () => setMainOpen(!mainOpen) }}
        />
      </Box>
    </Box>
  )
}
