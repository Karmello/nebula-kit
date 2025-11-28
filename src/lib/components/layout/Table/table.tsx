import classNames from 'classnames'

import { Box } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import { TableContext } from './TableContext'
import { DEFAULT_TABLE_LAYOUT, DEFAULT_TABLE_INTENT, TableProps } from './definitions'
import './table.scss'

export const Table = ({
  // HtmlTag
  tagAttrs,
  tagRef,
  children,
  // Box
  inlineSize,
  color,
  intent = DEFAULT_TABLE_INTENT,
  paddingBlock,
  paddingInline,
  // own
  layout = DEFAULT_TABLE_LAYOUT,
}: TableProps) => {
  return (
    <WithSlots<'Table.Header' | 'Table.Body' | 'Table.Footer' | 'Table.Caption'>
      childrenToVerify={children}
      componentName="Table"
      slotsConfig={[
        { name: 'Table.Header' },
        { name: 'Table.Body', required: true, allowMultiple: true },
        { name: 'Table.Footer' },
        { name: 'Table.Caption' },
      ]}
    >
      {({ slotsByName }) => {
        return (
          <TableContext value={{ color, intent, layout, paddingBlock, paddingInline }}>
            <Box tagAttrs={{ className: withPrefix('table-container') }} inlineSize={inlineSize}>
              <Box
                tag="table"
                tagAttrs={{
                  ...tagAttrs,
                  className: classNames(withPrefix('table'), tagAttrs?.className),
                  style: {
                    tableLayout: layout,
                    ...(tagAttrs?.style || {}),
                  },
                }}
                tagRef={tagRef}
                variant="solid"
                color={color}
                intent={intent}
              >
                {slotsByName['Table.Caption']}
                {slotsByName['Table.Header']}
                {slotsByName['Table.Body']}
                {slotsByName['Table.Footer']}
              </Box>
            </Box>
          </TableContext>
        )
      }}
    </WithSlots>
  )
}

Table.displayName = 'Table'
