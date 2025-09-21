import {
  Children,
  cloneElement,
  ComponentProps,
  ComponentRef,
  isValidElement,
  PropsWithoutRef,
  ReactElement,
  ReactNode,
  useLayoutEffect,
  useRef,
} from 'react'

import classNames from 'classnames'

import { Button, ButtonProps, Flex } from 'lib/components'
import { applyRespValues, applyStaticDataset } from 'lib/service'
import { useScreen, withPrefix } from 'lib/helpers'

import {
  ButtonGroupDirection,
  ButtonGroupTag,
  ButtonGroupProps,
  DEFAULT_BUTTON_GROUP_GAP,
} from './definitions'

import './button-group.scss'

const isButtonElement = (node: ReactNode): node is ReactElement<ButtonProps, typeof Button> =>
  isValidElement(node) && node.type === Button

export const ButtonGroup = <T extends ButtonGroupTag = 'div'>({
  children,
  tag,
  tagAttrs,
  tagRef,
  // button
  variant,
  intent,
  size,
  // flex
  gap = DEFAULT_BUTTON_GROUP_GAP,
  // own
  direction = ButtonGroupDirection[0],
  stretch = false,
  attached = false,
}: ButtonGroupProps<T>) => {
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
      'BtnGroup'
    )
  }, [bp, direction, stretch])

  return (
    <Flex
      tag={tag}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(withPrefix('btn-group'), tagAttrs?.className),
          ...applyStaticDataset('btn-group', { attached }),
        } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={tagRef || ref}
      gap={attached ? 0 : gap}
      flexWrap="nowrap"
    >
      {Children.map(children as any, child => {
        if (!isButtonElement(child)) return null

        return (
          <Flex.Item>
            {cloneElement<ButtonProps>(child, {
              ...child.props,
              variant: child.props.variant ?? variant,
              intent: child.props.intent ?? intent,
              size: child.props.size ?? size,
            })}
          </Flex.Item>
        )
      })}
    </Flex>
  )
}
