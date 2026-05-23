import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_TABLE_CAPTION_INTENT, TableCaptionProps } from './definitions'
import { useTableContext } from '../../TableContext'

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
