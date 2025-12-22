import { ComponentProps, ComponentRef, ElementType, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { updateDomRespStyle, updateDomRespDataset } from 'lib/service'

import { FlexProps } from './definitions'

import './flex.scss'

export const Flex = <T extends ElementType = 'div'>({
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
  // Box
  children,
  tag,
  tagAttrs,
  tagRef,
}: FlexProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    updateDomRespStyle('Flex', tagRef || ref, bp, {
      display,
      flexDirection,
      flexWrap,
      justifyContent,
      alignItems,
      alignContent,
      gap,
      rowGap,
      columnGap,
    })
  }, [bp, display, flexDirection, flexWrap, justifyContent, alignItems, alignContent, gap, rowGap, columnGap])

  useLayoutEffect(() => {
    updateDomRespDataset('Flex', tagRef || ref, bp, { flexDirection })
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
