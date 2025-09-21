import classNames from 'classnames'

import { Box } from 'lib/components'
import { scale, withPrefix } from 'lib/helpers'

import { DEFAULT_DIVIDER_INTENT, DEFAULT_DIVIDER_THICKNESS, DividerProps } from './definitions'
import './divider.scss'

export const Divider = ({
  tagAttrs,
  tagRef,
  intent = DEFAULT_DIVIDER_INTENT,
  thickness = DEFAULT_DIVIDER_THICKNESS,
}: DividerProps) => {
  return (
    <Box
      tag="hr"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('divider'), tagAttrs?.className),
      }}
      tagRef={tagRef}
      variant="solid"
      intent={intent}
      blockSize={scale(thickness)}
    />
  )
}

Divider.displayName = 'Divider'
