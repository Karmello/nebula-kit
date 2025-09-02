import classNames from 'classnames'

import { Box, BoxProps } from 'lib/components'
import { Slot } from 'lib/definitions'
import { withPrefix } from 'lib/helpers'

export const Main = ({ elemProps, ...rest }: Omit<BoxProps<'main'>, 'elem'>) => {
  return (
    <Box
      elem="main"
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('app-frame-main'), elemProps?.className),
      }}
      {...rest}
    />
  )
}

Main.slotName = Slot.main
