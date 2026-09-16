import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'
import { useSlots } from 'lib/hooks'

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
  elemAttrs,
  elemRef,
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
  const slots = useSlots<'Table.Header' | 'Table.Body' | 'Table.Footer' | 'Table.Caption'>({
    childrenToVerify: children,
    componentName: 'Table',
    slotsConfig: [
      { name: 'Table.Header' },
      { name: 'Table.Body', required: true, allowMultiple: true },
      { name: 'Table.Footer' },
      { name: 'Table.Caption' },
    ],
  })

  if (!slots) return null

  const { slotsByName } = slots

  return (
    <Box
      className={withPrefix('table-container')}
      inlineSize={inlineSize}
      minInlineSize={minInlineSize}
      maxInlineSize={maxInlineSize}
    >
      <Box
        elemTag="table"
        className={classNames(withPrefix('table'), elemAttrs?.className)}
        elemAttrs={{
          ...elemAttrs,
          style: {
            tableLayout: layout,
            ...(elemAttrs?.style || {}),
          },
        }}
        elemRef={elemRef}
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
}

Table.displayName = 'Table'
