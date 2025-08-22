import { useId, useState, ComponentProps } from 'react'
import classNames from 'classnames'

import { withPrefix, getDataAttrs, getCssVars } from 'lib-2/helpers'
import { Box } from 'lib-2/components'
import { ResponsiveProp, ScaleValue } from 'lib-2/definitions'

import { NavLayoutContext } from './useNavLayoutContext'

import './nav-layout.scss'

export interface NavLayoutOwnProps extends ComponentProps<typeof Box> {
  side?: 'left' | 'right'
  sideWidth?: ResponsiveProp<ScaleValue | string>
  defaultOpen?: boolean
  open?: boolean
}

export const NavLayout = ({
  side = 'left',
  sideWidth = 80,
  defaultOpen = true,
  className,
  style,
  ...rest
}: NavLayoutOwnProps) => {
  const id = useId()
  const sideId = `${id}-sidebar`
  const [open, setOpen] = useState(defaultOpen)

  return (
    <NavLayoutContext.Provider value={{ sideId, open, setOpen }}>
      <Box
        className={classNames(withPrefix('nav-layout'), className)}
        style={{
          ...getCssVars('nav-layout', { sideWidth }),
          ...style,
        }}
        {...getDataAttrs('nav-layout', { side, open })}
        {...rest}
      />
    </NavLayoutContext.Provider>
  )
}

NavLayout.displayName = 'NavLayout'
