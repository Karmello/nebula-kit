import {
  cloneElement,
  ComponentProps,
  ComponentRef,
  ElementType,
  PropsWithoutRef,
  useLayoutEffect,
  useRef,
  Children,
  ReactElement,
} from 'react'

import classNames from 'classnames'

import { Flex } from 'lib/components'
import { applyRespValues } from 'lib/service'
import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'

import { SegmentProps, SEGMENT_DIRECTIONS } from './definitions'

import './segment.scss'

export const Segment = <T extends ElementType = 'div'>({
  // HtmlTag
  children,
  tag,
  tagAttrs,
  tagRef,
  // Box
  variant,
  color,
  intent,
  // Button
  size,
  // own
  direction = SEGMENT_DIRECTIONS[0],
  stretch = false,
}: SegmentProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    applyRespValues(
      'dataset',
      tagRef || ref,
      bp,
      {
        direction,
        stretch,
      },
      'Segment'
    )
  }, [bp, direction, stretch])

  return (
    <Flex
      tag={tag}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(withPrefix('segment'), tagAttrs?.className),
        } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={tagRef || ref}
      flexWrap="nowrap"
    >
      {Children.toArray(children).map((child, index) => {
        const finalChild = child as ReactElement<any>

        return (
          <Flex.Item key={index}>
            {cloneElement(finalChild, {
              ...finalChild.props,
              variant: finalChild.props.variant ?? variant,
              color: finalChild.props.color ?? color,
              intent: finalChild.props.intent ?? intent,
              size: finalChild.props.size ?? size,
            })}
          </Flex.Item>
        )
      })}
    </Flex>
  )
}

Segment.displayName = 'Segment'
