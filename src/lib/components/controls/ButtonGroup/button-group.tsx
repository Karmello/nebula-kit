import {
  Children,
  cloneElement,
  ComponentProps,
  isValidElement,
  PropsWithoutRef,
  ReactElement,
  ReactNode,
} from 'react'

import classNames from 'classnames'

import { Button, ButtonProps, Flex, FlexItemProps } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { applyStaticDataset } from 'lib/service'

import { ButtonGroupElem, ButtonGroupProps } from './definitions'
import './button-group.scss'

const isButtonElement = (node: ReactNode): node is ReactElement<ButtonProps, typeof Button> =>
  isValidElement(node) && node.type === Button

export const ButtonGroup = <E extends ButtonGroupElem = 'div'>({
  children,
  elem,
  elemProps,
  elemRef,
  // button
  variant,
  intent,
  size,
  // flex
  flexDirection = 'row',
  alignItems,
  gap,
  // own
  attached = false,
}: ButtonGroupProps<E>) => {
  let flex: FlexItemProps['flex'] = 0

  if (typeof alignItems === 'object') {
    flex = {
      base: alignItems.base === 'stretch' ? 1 : undefined,
      sm: alignItems.sm === 'stretch' ? 1 : undefined,
      md: alignItems.md === 'stretch' ? 1 : undefined,
      lg: alignItems.lg === 'stretch' ? 1 : undefined,
      xl: alignItems.xl === 'stretch' ? 1 : undefined,
    }
  } else if (alignItems === 'stretch') {
    flex = 1
  }

  return (
    <Flex
      elem={elem}
      elemProps={
        {
          ...elemProps,
          className: classNames(withPrefix('btn-group'), elemProps?.className),
          ...applyStaticDataset('btn-group', { attached }),
        } as PropsWithoutRef<ComponentProps<E>>
      }
      elemRef={elemRef}
      flexDirection={flexDirection}
      alignItems={alignItems}
      gap={attached ? 0 : gap}
      flexWrap="nowrap"
    >
      {Children.map(children as any, (child, i) => {
        if (!isButtonElement(child)) return null

        const isLastChild = i === Children.toArray(children).length - 1

        return (
          <Flex.Item flex={flex} alignSelf="center">
            {cloneElement<ButtonProps>(child, {
              ...child.props,
              variant: child.props.variant ?? variant,
              intent: child.props.intent ?? intent,
              size: child.props.size ?? size,
              elemProps: {
                ...child.props.elemProps,
                style: {
                  ...child.props.elemProps?.style,
                  ...(flexDirection === 'row'
                    ? {
                        borderTopLeftRadius: i === 0 ? 'var(--neb-border-radius)' : undefined,
                        borderBottomLeftRadius: i === 0 ? 'var(--neb-border-radius)' : undefined,
                        borderTopRightRadius: isLastChild ? 'var(--neb-border-radius)' : undefined,
                        borderBottomRightRadius: isLastChild ? 'var(--neb-border-radius)' : undefined,
                      }
                    : {
                        borderTopLeftRadius: i === 0 ? 'var(--neb-border-radius)' : undefined,
                        borderTopRightRadius: i === 0 ? 'var(--neb-border-radius)' : undefined,
                        borderBottomLeftRadius: isLastChild ? 'var(--neb-border-radius)' : undefined,
                        borderBottomRightRadius: isLastChild ? 'var(--neb-border-radius)' : undefined,
                      }),
                },
              },
            })}
          </Flex.Item>
        )
      })}
    </Flex>
  )
}
