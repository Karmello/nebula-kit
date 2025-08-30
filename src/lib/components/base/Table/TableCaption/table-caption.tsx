import { ComponentPropsWithRef } from 'react'
import classNames from 'classnames'

import { Box, BoxOwnProps } from 'lib/components'
import { withPrefix } from 'lib/helpers'

export type TableCaptionProps = ComponentPropsWithRef<'caption'> & BoxOwnProps

export const TableCaption = ({ className, ...rest }: TableCaptionProps) => {
  return <Box {...rest} as="caption" className={classNames(withPrefix('table-caption'), className)} />
}

TableCaption.displayName = 'TableCaption'
