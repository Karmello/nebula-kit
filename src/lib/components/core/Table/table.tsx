import classNames from 'classnames'

import { WithSlots } from 'lib/components/shared'
import { withPrefix } from 'lib/helpers'

import { Box } from '../Box'
import {
  DEFAULT_TABLE_INTENT,
  DEFAULT_TABLE_LAYOUT,
  DEFAULT_TABLE_PADDING_BLOCK,
  DEFAULT_TABLE_PADDING_INLINE,
} from './constants'
import { TableContext } from './TableContext'
import { TableProps } from './types'

import './table.scss'

export const Table = ({
  // Box
  tagAttrs,
  tagRef,
  children,
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
              bgMode="filled"
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
