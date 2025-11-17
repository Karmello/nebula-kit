import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { LoaderProps, LOADER_SIZE_CONFIG, DEFAULT_LOADER_SIZE } from './definitions'

import './loader.scss'

export const Loader = ({
  // HtmlTag
  tagAttrs,
  tagRef,
  // Box
  intent,
  color,
  // own
  size = DEFAULT_LOADER_SIZE,
}: LoaderProps) => {
  return (
    <Box
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('loader'), tagAttrs?.className || ''),
        style: {
          borderTopColor: `var(--neb-${intent}-solid)`,
        },
      }}
      tagRef={tagRef}
      blockSize={LOADER_SIZE_CONFIG[size]}
      inlineSize={LOADER_SIZE_CONFIG[size]}
      color={color}
    />
  )
}
