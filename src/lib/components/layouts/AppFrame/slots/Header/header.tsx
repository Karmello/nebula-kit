import { ComponentPropsWithRef, CSSProperties } from 'react'

import { Box, BoxOwnProps } from 'lib/components'
import { Slot } from 'lib/definitions'

import { useAppFrame } from '../../AppFrameProvider'

export const Header = (props: ComponentPropsWithRef<'header'> & BoxOwnProps) => {
  const { stickyHeader } = useAppFrame()

  return (
    <Box
      variant="solid"
      intent="tertiary"
      {...props}
      as="header"
      style={
        stickyHeader
          ? ({
              ...props.style,
              position: 'sticky',
              top: 0,
              zIndex: 10,
            } as CSSProperties)
          : props.style
      }
    />
  )
}

Header.slotName = Slot.header
