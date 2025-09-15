import classNames from 'classnames'

import { Flex } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { MarkerListElem } from 'lib/definitions'
import { withPrefix } from 'lib/helpers'

import { MarkerListProps } from './definitions'
import './marker-list.scss'

export const MarkerList = <E extends MarkerListElem = 'ul'>({
  children,
  elem,
  elemProps,
  elemRef,
  gap = 3,
  // own
  listStyle,
}: MarkerListProps<E>) => {
  return (
    <WithSlots<'Item'>
      componentName="MarkerList"
      slotsConfig={[{ name: 'Item', required: true, allowMultiple: true }]}
      childrenToVerify={children}
    >
      {slots => {
        return (
          <Flex
            elem={elem || 'ul'}
            elemProps={{
              ...elemProps,
              className: classNames(withPrefix('marker-list'), elemProps?.className),
              style: {
                ...elemProps?.style,
                listStyle,
                listStylePosition: 'outside',
              },
              role: 'list',
            }}
            elemRef={elemRef}
            flexDirection="column"
            gap={gap}
          >
            {slots.Item || ''}
          </Flex>
        )
      }}
    </WithSlots>
  )
}
