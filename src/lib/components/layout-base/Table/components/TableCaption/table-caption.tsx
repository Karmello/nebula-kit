import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { TableCaptionProps } from './definitions'

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
