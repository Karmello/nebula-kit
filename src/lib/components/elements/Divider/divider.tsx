import classNames from 'classnames'

import { Box } from 'lib/components'
import { scale, withPrefix } from 'lib/helpers'

import { DEFAULT_DIVIDER_INTENT, DEFAULT_DIVIDER_THICKNESS, DividerProps } from './definitions'
import './divider.scss'

export const Divider = ({
  elemProps,
  elemRef,
  intent = DEFAULT_DIVIDER_INTENT,
  thickness = DEFAULT_DIVIDER_THICKNESS,
}: DividerProps) => {
  return (
    <Box
      elem="hr"
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('divider'), elemProps?.className),
      }}
      elemRef={elemRef}
      variant="solid"
      intent={intent}
      blockSize={scale(thickness)}
    />
  )
}

Divider.displayName = 'Divider'
