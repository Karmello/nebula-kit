import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'
import { DividerProps } from 'lib/index.core'

import { Box } from '../Box'
import { DEFAULT_DIVIDER_INTENT, DEFAULT_DIVIDER_MARGIN_BLOCK } from './definitions'

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
  elevated,
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
      blockSize="2px"
      borderWidth="0px"
      marginBlock={marginBlock}
      marginTop={marginTop}
      marginBottom={marginBottom}
      elevated={elevated}
      surface="dividing"
    />
  )
}

Divider.displayName = 'Divider'
