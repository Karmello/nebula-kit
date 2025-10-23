import classNames from 'classnames'

import { Box } from 'lib/components'
import { scale, withPrefix } from 'lib/helpers'
import { DEFAULT_NEBKIT_PROVIDER_BORDER_WIDTH } from 'lib/components/utility/NebkitProvider/definitions'

import { DEFAULT_DIVIDER_INTENT, DividerProps } from './definitions'
import './divider.scss'

export const Divider = ({
  tagAttrs,
  tagRef,
  intent = DEFAULT_DIVIDER_INTENT,
  blockSize = DEFAULT_NEBKIT_PROVIDER_BORDER_WIDTH,
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
