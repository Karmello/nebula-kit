import { ComponentProps, Ref } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'

export interface NavLayoutMainProps extends ComponentProps<typeof Box> {
  ref?: Ref<any>
}

export const NavLayoutMain = ({ className, children, ...rest }: NavLayoutMainProps) => {
  return (
    <Box as="main" role="main" className={classNames('neb-nav-layout-main', className)} {...rest}>
      {children}
    </Box>
  )
}

NavLayoutMain.displayName = 'NavLayoutMain'
