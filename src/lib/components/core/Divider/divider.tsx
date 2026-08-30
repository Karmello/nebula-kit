import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'

import { Box } from '../Box'
import {
  DEFAULT_DIVIDER_INTENT,
  DEFAULT_DIVIDER_MARGIN_BLOCK,
  DEFAULT_DIVIDER_SURFACE_DEPTH,
} from './constants'
import { DividerProps } from './types'

import './divider.scss'

export const Divider = ({
  // Box
  tagAttrs,
  tagRef,
  color,
  intent = DEFAULT_DIVIDER_INTENT,
  marginBlock = DEFAULT_DIVIDER_MARGIN_BLOCK,
  marginTop,
  marginBottom,
  surfaceDepth = DEFAULT_DIVIDER_SURFACE_DEPTH,
}: DividerProps) => {
  return (
    <Box
      tag="hr"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('divider'), tagAttrs?.className),
      }}
      tagRef={tagRef}
      drawable
      variant="solid"
      color={color}
      intent={intent}
      surfaceDepth={surfaceDepth}
      surfaceRole="edge"
      blockSize="2px"
      borderWidth="0px"
      marginBlock={marginBlock}
      marginTop={marginTop}
      marginBottom={marginBottom}
    />
  )
}

Divider.displayName = 'Divider'
