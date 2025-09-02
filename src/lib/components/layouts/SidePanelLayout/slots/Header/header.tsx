import classNames from 'classnames'
import { Box, BoxProps } from 'lib/components'
import { Slot } from 'lib/definitions'
import { withPrefix } from 'lib/helpers'

export const Header = ({ elemProps, ...rest }: Omit<BoxProps<'header'>, 'elem'>) => {
  return (
    <Box
      elem="header"
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('side-panel-layout-header'), elemProps?.className),
      }}
      {...rest}
    />
  )
}

Header.slotName = Slot.header
