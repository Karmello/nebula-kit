import { ComponentProps, ElementType, PropsWithoutRef } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { Slot } from 'lib/definitions'
import { withPrefix } from 'lib/helpers'

import { SidePanelLayoutMainBarProps } from './definitions'

export const MainBar = <E extends ElementType = 'div'>({
  children,
  elem,
  elemProps,
  elemRef,
}: SidePanelLayoutMainBarProps<E>) => {
  return (
    <Box
      elem={elem}
      elemProps={
        {
          ...elemProps,
          className: classNames(withPrefix('side-panel-layout-main-bar'), elemProps?.className),
        } as PropsWithoutRef<ComponentProps<E>>
      }
      elemRef={elemRef}
    >
      {children}
    </Box>
  )
}

MainBar.displayName = 'SidePanelLayout.MainBar'
MainBar.slotName = Slot.mainBar
