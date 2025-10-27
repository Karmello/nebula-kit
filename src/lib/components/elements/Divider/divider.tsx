import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { useNebkitStore } from 'lib/state'
import { NEBKIT_PROVIDER_SIZES_MAP } from 'lib/components/utility/NebkitProvider/definitions'

import { DEFAULT_DIVIDER_INTENT, DividerProps } from './definitions'

import './divider.scss'

export const Divider = ({ tagAttrs, tagRef, intent = DEFAULT_DIVIDER_INTENT, blockSize }: DividerProps) => {
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
      intent={intent}
      blockSize={blockSize !== undefined ? blockSize : NEBKIT_PROVIDER_SIZES_MAP.borderWidth[borderWidth]}
    />
  )
}

Divider.displayName = 'Divider'
