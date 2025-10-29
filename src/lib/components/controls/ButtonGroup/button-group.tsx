import {
  Children,
  cloneElement,
  ComponentProps,
  ComponentRef,
  PropsWithoutRef,
  useLayoutEffect,
  useRef,
} from 'react'

import classNames from 'classnames'

import { ButtonProps, Flex } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { applyRespValues, applyStaticDataset } from 'lib/service'
import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'

import {
  BUTTON_GROUP_DIRECTIONS,
  ButtonGroupTag,
  ButtonGroupProps,
  DEFAULT_BUTTON_GROUP_GAP,
} from './definitions'

import './button-group.scss'

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
  direction = BUTTON_GROUP_DIRECTIONS[0],
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
      <WithSlots<'Button' | 'ButtonLink'>
        childrenToVerify={children}
        componentName="ButtonGroup"
        slotsConfig={[
          { name: 'Button', allowMultiple: true },
          { name: 'ButtonLink', allowMultiple: true },
        ]}
        someRequired
      >
        {({ allValidSlots }) => {
          return Children.map(allValidSlots as any, (child, index) => {
            return (
              <Flex.Item key={index}>
                {cloneElement<ButtonProps>(child, {
                  ...child.props,
                  tagAttrs: {
                    ...child.props.tagAttrs,
                    style: {
                      ...child.props.tagAttrs?.style,
                      '--i': index,
                    },
                  },
                  variant: child.props.variant ?? variant,
                  intent: child.props.intent ?? intent,
                  size: child.props.size ?? size,
                })}
              </Flex.Item>
            )
          })
        }}
      </WithSlots>
    </Flex>
  )
}

ButtonGroup.displayName = 'ButtonGroup'
