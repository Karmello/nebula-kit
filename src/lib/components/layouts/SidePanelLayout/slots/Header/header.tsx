import classNames from 'classnames'
import { Box } from 'lib/components'
import { LayoutSlotProps, Slot } from 'lib/definitions'
import { withPrefix } from 'lib/helpers'

import '../../side-panel-layout.scss'

export const Header = ({ elemProps, ...rest }: LayoutSlotProps<'header'>) => {
  return (
    <Box
      {...rest}
      elem="header"
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('side-panel-layout-header'), elemProps?.className),
      }}
    />
  )
}

Header.displayName = 'SidePanelLayout.Header'
Header.slotName = Slot.header
