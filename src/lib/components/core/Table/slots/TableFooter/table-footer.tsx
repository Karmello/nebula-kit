import classNames from 'classnames'

import { Box } from 'lib/components'
import { WithSlots } from 'lib/components/shared'
import { withPrefix } from 'lib/helpers'

import { TableContext, useTableContext } from '../../TableContext'
import { DEFAULT_TABLE_FOOTER_INTENT, TableFooterProps } from './definitions'

export const TableFooter = ({
  // Box
  children,
  tagAttrs,
  tagRef,
  color,
  intent = DEFAULT_TABLE_FOOTER_INTENT,
  paddingBlock,
  paddingInline,
  textAlign,
}: TableFooterProps) => {
  const context = useTableContext()

  return (
    <WithSlots<'Table.Row'>
      childrenToVerify={children}
      componentName="Table.Footer"
      slotsConfig={[{ name: 'Table.Row', required: true, allowMultiple: true }]}
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
              tag="tfoot"
              tagAttrs={{
                ...tagAttrs,
                className: classNames(withPrefix('table-footer'), tagAttrs?.className),
              }}
              tagRef={tagRef}
            >
              {slotsByName['Table.Row']}
            </Box>
          </TableContext>
        )
      }}
    </WithSlots>
  )
}

TableFooter.displayName = 'Table.Footer'
