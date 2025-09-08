import classNames from 'classnames'

import { Button } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { IconButtonProps } from './definitions'
import './icon-button.scss'

export const IconButton = ({ elemProps, ...rest }: IconButtonProps) => {
  return (
    <Button
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('icon-btn'), elemProps?.className),
      }}
      {...rest}
    >
      {''}
    </Button>
  )
}

IconButton.displayName = 'IconButton'
