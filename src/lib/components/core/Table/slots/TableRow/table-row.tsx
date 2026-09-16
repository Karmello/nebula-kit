import { cloneElement } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components/core/Box'
import { withPrefix } from 'lib/helpers'
import { useSlots } from 'lib/hooks'

import { TableContext, useTableContext } from '../../TableContext'
import { TableHeaderCellProps } from '../TableHeaderCell/types'
import { TableRowProps } from './types'

export const TableRow = ({
  // Box
  children,
  tagAttrs,
  tagRef,
  color,
  intent,
  textAlign,
}: TableRowProps) => {
  const context = useTableContext()

  const slots = useSlots<'Table.HeaderCell' | 'Table.Cell'>({
    childrenToVerify: children,
    componentName: 'Table.Row',
    slotsConfig: [
      { name: 'Table.HeaderCell', allowMultiple: true },
      { name: 'Table.Cell', allowMultiple: true },
    ],
    someRequired: true,
  })

  if (!slots) return null

  return (
    <TableContext
      value={{
        color: color || context.color,
        intent: intent || context.intent,
        paddingBlock: context.paddingBlock,
        paddingInline: context.paddingInline,
        textAlign: textAlign || context.textAlign,
      }}
    >
      <Box
        tag="tr"
        className={classNames(withPrefix('table-row'), tagAttrs?.className)}
        tagAttrs={tagAttrs}
        tagRef={tagRef}
      >
        {slots.allValidSlots.map((slot: any) => {
          if (slot.type.displayName === 'Table.HeaderCell') {
            return cloneElement<TableHeaderCellProps>(slot, {
              tagAttrs: { ...slot.props.tagAttrs, scope: 'row' },
            })
          } else {
            return slot
          }
        })}
      </Box>
    </TableContext>
  )
}

TableRow.displayName = 'Table.Row'
