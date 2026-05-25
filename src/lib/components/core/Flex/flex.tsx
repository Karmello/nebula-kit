import { ComponentProps, ComponentRef, ElementType, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix, resolveLengthValue } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { syncRespStyle, syncRespDataset } from 'lib/internals/dom'

import { FlexProps } from './definitions'

import './flex.scss'

export const Flex = <T extends ElementType = 'div'>({
  // Box
  children,
  tag,
  tagAttrs,
  tagRef,
  // own
  display,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  gap,
  rowGap,
  columnGap,
}: FlexProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    syncRespStyle('Flex', tagRef || ref, bp, {
      display,
      flexDirection,
      flexWrap,
      justifyContent,
      alignItems,
      alignContent,
      gap: gap !== undefined ? resolveLengthValue(gap) : undefined,
      rowGap: rowGap !== undefined ? resolveLengthValue(rowGap) : undefined,
      columnGap: columnGap !== undefined ? resolveLengthValue(columnGap) : undefined,
    })
  }, [bp, display, flexDirection, flexWrap, justifyContent, alignItems, alignContent, gap, rowGap, columnGap])

  useLayoutEffect(() => {
    syncRespDataset('Flex', tagRef || ref, bp, { flexDirection })
  }, [bp, flexDirection])

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
