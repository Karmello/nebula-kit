import classNames from 'classnames'

import { Box, BoxOwnProps, BoxProps } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type TableCaptionProps = Pick<BoxProps, 'children' | 'className' | 'style'> & BoxOwnProps

export const TableCaption = ({ className, ...rest }: TableCaptionProps) => {
  return <Box {...rest} as="caption" className={classNames(withPrefix('table-caption'), className)} />
}

TableCaption.displayName = 'TableCaption'
