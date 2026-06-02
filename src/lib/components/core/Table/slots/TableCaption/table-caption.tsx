import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'
import { Box, TableCaptionProps } from 'lib/index.core'

import { useTableContext } from '../../TableContext'
import { DEFAULT_TABLE_CAPTION_INTENT } from './definitions'

export const TableCaption = ({
  // Box
  children,
  tagAttrs,
  tagRef,
  color,
  intent = DEFAULT_TABLE_CAPTION_INTENT,
  paddingBlock,
  paddingInline,
  textAlign,
}: TableCaptionProps) => {
  const context = useTableContext()

  return (
    <Box
      tag="caption"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('table-caption'), tagAttrs?.className),
      }}
      tagRef={tagRef}
      drawable
      variant="ghost"
      color={color}
      intent={intent}
      paddingBlock={paddingBlock || context.paddingBlock}
      paddingInline={paddingInline}
      textAlign={textAlign}
      borderRadius="0px"
    >
      {children}
    </Box>
  )
}

TableCaption.displayName = 'Table.Caption'
