import { ComponentProps, ElementType, PropsWithoutRef } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { SplitViewMainBarProps } from './definitions'

export const SplitViewMainBar = <E extends ElementType = 'div'>({
  children,
  elem,
  elemProps,
  elemRef,
}: SplitViewMainBarProps<E>) => {
  return (
    <Box
      elem={elem}
      elemProps={
        {
          ...elemProps,
          className: classNames(withPrefix('split-view-main-bar'), elemProps?.className),
        } as PropsWithoutRef<ComponentProps<E>>
      }
      elemRef={elemRef}
      borderRadius={0}
    >
      {children}
    </Box>
  )
}

SplitViewMainBar.displayName = 'SplitView.MainBar'
SplitViewMainBar.slotName = 'MainBar'
