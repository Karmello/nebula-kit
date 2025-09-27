import { ComponentProps, ElementType, PropsWithoutRef } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { SplitViewMainBarProps } from './definitions'

export const SplitViewMainBar = <T extends ElementType = 'div'>({
  children,
  tag,
  tagAttrs,
  tagRef,
}: SplitViewMainBarProps<T>) => {
  return (
    <Box
      tag={tag}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(withPrefix('split-view-main-bar'), tagAttrs?.className),
        } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={tagRef}
      borderRadius={0}
    >
      {children}
    </Box>
  )
}

SplitViewMainBar.displayName = 'SplitView.MainBar'
