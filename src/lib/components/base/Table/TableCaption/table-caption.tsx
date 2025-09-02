import classNames from 'classnames'

import { Box, BoxProps } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type TableCaptionProps = Pick<BoxProps<'td'>, 'children' | 'elemProps' | 'elemRef'>

export const TableCaption = ({ children, elemProps, elemRef }: TableCaptionProps) => {
  return (
    <Box
      elem="caption"
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('table-caption'), elemProps?.className),
      }}
      elemRef={elemRef}
    >
      {children}
    </Box>
  )
}

TableCaption.displayName = 'TableCaption'
