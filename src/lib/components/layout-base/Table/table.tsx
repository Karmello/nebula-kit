import classNames from 'classnames'

import { Box } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'
import { applyStaticDataset } from 'lib/service'

import { TableContext } from './TableContext'
import { DEFAULT_TABLE_LAYOUT, DEFAULT_TABLE_INTENT, TableProps } from './definitions'
import './table.scss'

export const Table = ({
  // HtmlTag
  tagAttrs,
  tagRef,
  children,
  // Box
  intent = DEFAULT_TABLE_INTENT,
  // own
  layout = DEFAULT_TABLE_LAYOUT,
  zebra = false,
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
      {({ slots }) => {
        return (
          <TableContext value={{ intent, layout }}>
            <Box tagAttrs={{ className: withPrefix('table-container') }}>
              <Box
                tag="table"
                tagAttrs={{
                  ...tagAttrs,
                  className: classNames(withPrefix('table'), tagAttrs?.className),
                  style: {
                    tableLayout: layout,
                    ...(tagAttrs?.style || {}),
                  },
                  ...applyStaticDataset('table', { zebra }),
                }}
                tagRef={tagRef}
                variant="solid"
                intent={intent}
              >
                {slots['Table.Caption']}
                {slots['Table.Header']}
                {slots['Table.Body']}
                {slots['Table.Footer']}
              </Box>
            </Box>
          </TableContext>
        )
      }}
    </WithSlots>
  )
}

Table.displayName = 'Table'
