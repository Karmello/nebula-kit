import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { BOX_BORDER_WIDTH } from 'lib/components/core/base/Box/definitions'

import {
  DEFAULT_DIVIDER_SURFACE,
  DEFAULT_DIVIDER_INTENT,
  DEFAULT_DIVIDER_MARGIN_BLOCK,
  DEFAULT_DIVIDER_OPACITY,
  DividerProps,
} from './definitions'

import './divider.scss'

export const Divider = ({
  // HtmlTag
  tagAttrs,
  tagRef,
  // Box
  color,
  intent = DEFAULT_DIVIDER_INTENT,
  marginBlock = DEFAULT_DIVIDER_MARGIN_BLOCK,
  marginTop,
  marginBottom,
  opacity = DEFAULT_DIVIDER_OPACITY,
  surface = DEFAULT_DIVIDER_SURFACE,
  selected,
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
      blockSize={BOX_BORDER_WIDTH}
      borderWidth="0px"
      marginBlock={marginBlock}
      marginTop={marginTop}
      marginBottom={marginBottom}
      opacity={opacity}
      surface={surface}
      interactive={selected}
      selected={selected}
    />
  )
}

Divider.displayName = 'Divider'
