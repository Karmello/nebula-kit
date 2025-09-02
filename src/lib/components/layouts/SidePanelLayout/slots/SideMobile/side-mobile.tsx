import { ReactNode, JSX } from 'react'
import classNames from 'classnames'

import { Box, HAlign, IconButton, useSidePanelLayout } from 'lib/components'
import { LayoutSlotProps, Slot } from 'lib/definitions'
import { useScreen, withPrefix } from 'lib/helpers'

type ChildrenAsFuncArgs = {
  setSideOpen: (open: boolean) => void
}

import '../../side-panel-layout.scss'

export const SideMobile = ({
  children,
  elemProps,
  ...rest
}: Omit<LayoutSlotProps<'aside'>, 'children'> & {
  children: ReactNode | ((args: ChildrenAsFuncArgs) => JSX.Element)
}) => {
  const { isMobile } = useScreen()
  const { sideOpen, setSideOpen, sidePosition } = useSidePanelLayout()

  return (
    <Box
      intent="secondary"
      {...rest}
      elem="aside"
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('side-panel-layout-side-mobile'), elemProps?.className),
      }}
      variant="solid"
      left={sidePosition === 'left' ? 0 : undefined}
      right={sidePosition === 'right' ? 0 : undefined}
      inlineSize={isMobile && sideOpen ? 'min(85vw, 320px)' : 0}
    >
      <HAlign position="right">
        <IconButton
          elemProps={{
            onClick: () => {
              setSideOpen(false)
            },
          }}
          iconName="close"
          variant="ghost"
          size="sm"
        />
      </HAlign>
      {typeof children === 'function' ? children({ setSideOpen }) : children}
    </Box>
  )
}

SideMobile.slotName = Slot.sideMobile
