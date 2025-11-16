import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { useNebkitStore } from 'lib/state'
import { NEBKIT_SIZES_MAP } from 'lib/components/utility/NebkitProvider/definitions'

import { DEFAULT_DIVIDER_INTENT, DEFAULT_DIVIDER_MARGIN_BLOCK, DividerProps } from './definitions'

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
  // own
  size,
}: DividerProps) => {
  const { borderWidth } = useNebkitStore()

  return (
    <Box
      tag="hr"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('divider'), tagAttrs?.className),
      }}
      tagRef={tagRef}
      variant="solid"
      color={color}
      intent={intent}
      blockSize={size !== undefined ? NEBKIT_SIZES_MAP.borderWidthSize[size] : borderWidth}
      borderWidth={0}
      marginBlock={marginBlock}
      marginTop={marginTop}
      marginBottom={marginBottom}
    />
  )
}

Divider.displayName = 'Divider'
