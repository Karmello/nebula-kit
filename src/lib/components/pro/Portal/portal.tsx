import { useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'

import { Box } from 'lib/components/core/Box'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_PORTAL_Z_INDEX } from './constants'
import { useAnchoredPosition } from './hooks'
import { type PortalProps } from './types'

export const DEFAULT_PORTAL_PLACEMENT: PortalProps['placement'] = 'bottom-start'

export const Portal = ({
  children,
  tagRef,
  tagAttrs,
  anchorRef,
  placement = DEFAULT_PORTAL_PLACEMENT,
  offset,
  zIndex = DEFAULT_PORTAL_Z_INDEX,
}: PortalProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null)

  const ref = useRef<HTMLDivElement | null>(null)
  const rootRef = tagRef || ref

  const position = useAnchoredPosition({
    anchorRef,
    placement,
    offset,
  })

  useLayoutEffect(() => {
    const div = document.createElement('div')

    div.setAttribute('data-neb-portal', '')

    document.body.appendChild(div)
    setContainer(div)

    return () => {
      document.body.removeChild(div)
    }
  }, [])

  if (!container) return null

  return createPortal(
    <Box
      tagRef={rootRef}
      className={classNames(withPrefix('portal'), tagAttrs?.className)}
      tagAttrs={{
        ...tagAttrs,
        style: {
          transition: 'none',
          ...tagAttrs?.style,
        },
      }}
      position="absolute"
      pointerEvents="auto"
      transform={position.transform}
      zIndex={zIndex}
      top={position.top !== undefined ? `${position.top}px` : '0px'}
      left={position.left !== undefined ? `${position.left}px` : '0px'}
    >
      {children}
    </Box>,
    container
  )
}

Portal.displayName = 'Portal'
