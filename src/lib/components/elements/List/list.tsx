import classNames from 'classnames'

import { Box } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { ListElem } from 'lib/definitions'
import { withPrefix } from 'lib/helpers'

import { ListProps } from './definitions'
import './list.scss'

export const List = <E extends ListElem = 'ul'>({
  children,
  elem,
  elemProps,
  elemRef,
  // own
  listStyle,
}: ListProps<E>) => {
  return (
    <WithSlots<'Item'>
      componentName="List"
      slotsConfig={[{ name: 'Item', required: true, allowMultiple: true }]}
      childrenToVerify={children}
    >
      {slots => {
        return (
          <Box
            elem={elem || 'ul'}
            elemProps={{
              ...elemProps,
              className: classNames(withPrefix('list'), elemProps?.className),
              style: {
                ...elemProps?.style,
                listStyle,
                listStylePosition: 'outside',
              },
            }}
            elemRef={elemRef}
          >
            {slots.Item}
          </Box>
        )
      }}
    </WithSlots>
  )
}
