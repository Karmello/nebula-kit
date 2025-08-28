import { JSX, ReactNode } from 'react'

import { Box, BoxProps, HAlign, IconButton, useSidePanelLayout } from 'lib/components'
import { Slot } from 'lib/definitions'
import { useScreen } from 'lib/helpers'

type ChildrenAsFuncArgs = {
  setSideOpen: (open: boolean) => void
}

export const SideMobile = ({
  children,
  ...rest
}: Omit<
  BoxProps,
  'children' | 'as' | 'position' | 'top' | 'left' | 'inlineSize' | 'minBlockSize' | 'overflowY'
> & {
  children: ReactNode | ((args: ChildrenAsFuncArgs) => JSX.Element)
}) => {
  const { isMobile } = useScreen()
  const { sideOpen, setSideOpen } = useSidePanelLayout()

  return (
    <Box
      variant="solid"
      intent="secondary"
      {...rest}
      as="aside"
      position="fixed"
      top={0}
      left={0}
      inlineSize={isMobile && sideOpen ? 'min(85vw, 320px)' : 0}
      minBlockSize="100dvh"
      overflowY="auto"
      style={{ zIndex: 20, ...rest.style }}
    >
      <HAlign position="right">
        <IconButton
          iconName="close"
          variant="ghost"
          size="sm"
          onClick={() => {
            setSideOpen(false)
          }}
        />
      </HAlign>
      {typeof children === 'function' ? children({ setSideOpen }) : children}
    </Box>
  )
}

SideMobile.slotName = Slot.sideMobile
