import { ComponentPropsWithRef, JSX, ReactNode } from 'react'

import { Box, BoxOwnProps, HAlign, IconButton, useSidePanelLayout } from 'lib/components'
import { Slot } from 'lib/definitions'
import { useScreen } from 'lib/helpers'

type ChildrenAsFuncArgs = {
  setSideOpen: (open: boolean) => void
}

export const SideMobile = ({
  children,
  ...rest
}: Omit<ComponentPropsWithRef<'aside'>, 'children'> &
  Omit<BoxOwnProps, 'position' | 'top' | 'left' | 'inlineSize' | 'minBlockSize' | 'overflowY'> & {
    children: ReactNode | ((args: ChildrenAsFuncArgs) => JSX.Element)
  }) => {
  const { isMobile } = useScreen()
  const { sideOpen, setSideOpen, sidePosition } = useSidePanelLayout()

  return (
    <Box
      variant="solid"
      intent="secondary"
      {...rest}
      as="aside"
      position="fixed"
      top={0}
      left={sidePosition === 'left' ? 0 : undefined}
      right={sidePosition === 'right' ? 0 : undefined}
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
