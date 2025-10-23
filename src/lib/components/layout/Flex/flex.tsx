import { ComponentProps, ComponentRef, ElementType, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix, useScreen } from 'lib/helpers'
import { applyRespValues } from 'lib/service'

import { FlexProps } from './definitions'

import './flex.scss'

export const Flex = <T extends ElementType = 'div'>({
  // own
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  gap,
  rowGap,
  columnGap,
  // Box
  children,
  tag,
  tagAttrs,
  tagRef,
}: FlexProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    applyRespValues('style', tagRef || ref, bp, {
      flexDirection,
      flexWrap,
      justifyContent,
      alignItems,
      gap,
      rowGap,
      columnGap,
    })
  }, [bp, flexDirection, flexWrap, justifyContent, alignItems, gap, rowGap, columnGap])

  return (
    <Box
      tag={tag}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(withPrefix('flex'), tagAttrs?.className),
        } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={tagRef || ref}
    >
      {children}
    </Box>
  )
}

Flex.displayName = 'Flex'
