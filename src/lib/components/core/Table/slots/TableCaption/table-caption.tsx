import classNames from 'classnames'

import { Box } from 'lib/components/core/Box'
import { withPrefix } from 'lib/helpers'

import { useTableContext } from '../../TableContext'
import { DEFAULT_TABLE_CAPTION_INTENT } from './constants'
import { TableCaptionProps } from './types'

export const TableCaption = ({
  // Box
  children,
  elemAttrs,
  elemRef,
  color,
  intent = DEFAULT_TABLE_CAPTION_INTENT,
  paddingBlock,
  paddingInline,
  textAlign,
}: TableCaptionProps) => {
  const context = useTableContext()

  return (
    <Box
      elemTag="caption"
      className={classNames(withPrefix('table-caption'), elemAttrs?.className)}
      elemAttrs={elemAttrs}
      elemRef={elemRef}
      drawable
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
