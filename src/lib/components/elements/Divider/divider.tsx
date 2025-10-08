import classNames from 'classnames'

import { Box } from 'lib/components'
import { scale, withPrefix } from 'lib/helpers'

import { DEFAULT_DIVIDER_INTENT, DEFAULT_DIVIDER_BLOCK_SIZE, DividerProps } from './definitions'
import './divider.scss'

export const Divider = ({
  tagAttrs,
  tagRef,
  intent = DEFAULT_DIVIDER_INTENT,
  blockSize = DEFAULT_DIVIDER_BLOCK_SIZE,
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
      blockSize={scale(blockSize)}
    />
  )
}

Divider.displayName = 'Divider'
