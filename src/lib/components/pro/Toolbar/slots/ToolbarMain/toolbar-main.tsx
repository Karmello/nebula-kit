import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'
import { Box, Resize } from 'lib/index.core'
import { ToolbarMainProps } from 'lib/index.pro'

import { useToolbarContext } from '../../providers/ToolbarProvider'

export const ToolbarMain = ({ children, tagAttrs, tagRef }: ToolbarMainProps) => {
  const { switchAt, mainOpen, isSwitchAtHit } = useToolbarContext()

  return (
    <Box
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('toolbar-main'), tagAttrs?.className),
        style: {
          ...tagAttrs?.style,
          minInlineSize: 0,
          maxInlineSize: '100vw',
        },
        inert: !isSwitchAtHit && !mainOpen,
      }}
      tagRef={tagRef}
      gridRow={{ base: '2 / 3', [String(switchAt)]: '1 / 2' }}
      gridColumn={{ base: '1 / -1', [String(switchAt)]: '3 / 4' }}
      alignSelf="center"
    >
      {!isSwitchAtHit ? (
        <Resize property="blockSize" visible={mainOpen} easing="cubic-bezier(0.4, 0, 0.2, 1)">
          {children}
        </Resize>
      ) : (
        children
      )}
    </Box>
  )
}

ToolbarMain.displayName = 'Toolbar.Main'
