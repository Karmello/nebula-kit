import classNames from 'classnames'

import { Box } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import { TableContext } from './TableContext'

import {
  DEFAULT_TABLE_LAYOUT,
  DEFAULT_TABLE_INTENT,
  TableProps,
  DEFAULT_TABLE_PADDING_BLOCK,
  DEFAULT_TABLE_PADDING_INLINE,
} from './definitions'

import './table.scss'

export const Table = ({
  // HtmlTag
  tagAttrs,
  tagRef,
  children,
  // Box
  inlineSize,
  minInlineSize,
  maxInlineSize,
  color,
  intent = DEFAULT_TABLE_INTENT,
  paddingBlock = DEFAULT_TABLE_PADDING_BLOCK,
  paddingInline = DEFAULT_TABLE_PADDING_INLINE,
  textAlign,
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
          <Box
            tagAttrs={{ className: withPrefix('table-container') }}
            inlineSize={inlineSize}
            minInlineSize={minInlineSize}
            maxInlineSize={maxInlineSize}
          >
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
              drawable
              variant="solid"
              color={color}
              intent={intent}
              borderRadius="0px"
            >
              <TableContext value={{ color, intent, paddingBlock, paddingInline, textAlign }}>
                {slotsByName['Table.Caption']}
              </TableContext>
              <TableContext value={{ color, intent, paddingBlock, paddingInline, textAlign }}>
                {slotsByName['Table.Header']}
              </TableContext>
              <TableContext value={{ color, intent, paddingBlock, paddingInline, textAlign }}>
                {slotsByName['Table.Body']}
              </TableContext>
              <TableContext value={{ color, intent, paddingBlock, paddingInline, textAlign }}>
                {slotsByName['Table.Footer']}
              </TableContext>
            </Box>
          </Box>
        )
      }}
    </WithSlots>
  )
}

Table.displayName = 'Table'
