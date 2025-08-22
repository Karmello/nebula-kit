import { ComponentProps, Ref } from 'react'
import classNames from 'classnames'

import { Box, useNavLayoutContext } from 'lib/components'

export interface NavLayoutSideProps extends ComponentProps<typeof Box> {
  ref?: Ref<any>
  ariaLabel?: string
}

export const NavLayoutSide = ({ ariaLabel, className, ...rest }: NavLayoutSideProps) => {
  const { sideId } = useNavLayoutContext('Sidebar')

  return (
    <Box
      as="aside"
      role="complementary"
      aria-label={ariaLabel}
      id={sideId}
      className={classNames('neb-nav-layout-side', className)}
      {...rest}
    />
  )
}

NavLayoutSide.displayName = 'NavLayout.Side'
