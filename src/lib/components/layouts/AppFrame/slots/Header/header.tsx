import { Box } from 'lib/components'
import { getDataAttrs, withPrefix } from 'lib/helpers'
import { LayoutSlotProps, Slot } from 'lib/definitions'

import { useAppFrame } from '../../AppFrameProvider'

import '../../app-frame.scss'

export const Header = (props: LayoutSlotProps<'header'>) => {
  const { stickyHeader } = useAppFrame()

  return (
    <Box
      variant="solid"
      intent="secondary"
      minBlockSize={22}
      borderRadius={0}
      {...props}
      elem="header"
      elemProps={{
        className: withPrefix('app-frame-header'),
        ...getDataAttrs('app-frame-header', { stickyHeader }),
      }}
    />
  )
}

Header.slotName = Slot.header
