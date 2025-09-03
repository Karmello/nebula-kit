import classNames from 'classnames'

import { Box } from 'lib/components'
import { LayoutSlotProps, Slot } from 'lib/definitions'
import { withPrefix } from 'lib/helpers'

import '../../app-frame.scss'

export const Main = ({ elemProps, ...rest }: LayoutSlotProps<'main'>) => {
  return (
    <Box
      borderRadius={0}
      {...rest}
      elem="main"
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('app-frame-main'), elemProps?.className),
      }}
    />
  )
}

Main.displayName = 'AppFrame.Main'
Main.slotName = Slot.main
