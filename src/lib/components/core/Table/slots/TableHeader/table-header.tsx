import classNames from 'classnames'

import { Box } from 'lib/components'
import { WithSlots } from 'lib/components/shared'
import { withPrefix } from 'lib/helpers'

import { TableHeaderProps } from './definitions'
import { TableContext, useTableContext } from '../../TableContext'

export const TableHeader = ({
  // Box
  children,
  tagAttrs,
  tagRef,
  color,
  intent,
  paddingBlock,
  paddingInline,
  textAlign,
}: TableHeaderProps) => {
  const context = useTableContext()

  return (
    <WithSlots<'Table.HeaderRow'>
      childrenToVerify={children}
      componentName="Table.Header"
      slotsConfig={[{ name: 'Table.HeaderRow', required: true, allowMultiple: true }]}
    >
      {({ slotsByName }) => {
        return (
          <TableContext
            value={{
              color: color || context.color,
              intent: intent || context.intent,
              paddingBlock: paddingBlock || context.paddingBlock,
              paddingInline: paddingInline || context.paddingInline,
              textAlign: textAlign || context.textAlign,
            }}
          >
            <Box
              tag="thead"
              tagAttrs={{
                ...tagAttrs,
                className: classNames(withPrefix('table-header'), tagAttrs?.className),
              }}
              tagRef={tagRef}
            >
              {slotsByName['Table.HeaderRow']}
            </Box>
          </TableContext>
        )
      }}
    </WithSlots>
  )
}

TableHeader.displayName = 'Table.Header'
