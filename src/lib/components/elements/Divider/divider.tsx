import classNames from 'classnames'

import { DEFAULT_DIVIDER_INTENT, DEFAULT_DIVIDER_THICKNESS } from 'lib/definitions'
import { Box } from 'lib/components'
import { scale, withPrefix } from 'lib/helpers'

import { DividerProps } from './definitions'
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
