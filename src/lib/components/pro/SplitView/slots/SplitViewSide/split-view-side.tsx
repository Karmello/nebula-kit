import { useRef } from 'react'

import { Box } from 'lib/components/core/Box'
import { IconButton } from 'lib/components/core/IconButton'
import { Resize } from 'lib/components/core/Resize'
import { StylingIsland } from 'lib/components/core/StylingIsland'
import { useFocusTrap } from 'lib/components/pro/useFocusTrap'

import { useSplitViewContext } from '../../providers/SplitViewProvider'
import {
  DEFAULT_SPLIT_VIEW_SIDE_BLOCK_SIZE,
  DEFAULT_SPLIT_VIEW_SIDE_INLINE_SIZE,
  DEFAULT_SPLIT_VIEW_SIDE_INTENT,
} from './constants'
import type { SplitViewSideProps } from './types'

export const SplitViewSide = ({
  // Box
  children,
  tagAttrs,
  tagRef,
  color,
  intent = DEFAULT_SPLIT_VIEW_SIDE_INTENT,
  inlineSize = DEFAULT_SPLIT_VIEW_SIDE_INLINE_SIZE,
  blockSize = DEFAULT_SPLIT_VIEW_SIDE_BLOCK_SIZE,
  padding,
  paddingInline,
  paddingBlock,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
}: SplitViewSideProps) => {
  const { sideOpen, setSideOpen, sidePosition, mode, switchAt } = useSplitViewContext()

  const ref = useRef(null)
  const finalRef = tagRef || ref

  useFocusTrap({
    ref: finalRef,
    active: mode == 'overlay' && sideOpen,
    onFocusEscape: () => setSideOpen(false),
  })

  return (
    <StylingIsland theme={{ base: 'global-flipped', [switchAt || 'lg']: 'global' }}>
      <Box
        tag="aside"
        tagAttrs={{
          ...tagAttrs,
          inert: !sideOpen,
          role: mode === 'overlay' ? 'dialog' : 'complementary',
          'aria-modal': mode === 'overlay' ? true : undefined,
        }}
        tagRef={finalRef}
        drawable
        borderMode="filled"
        borderRole="edge"
        color={color}
        intent={intent}
        borderWidth="0px"
        borderRadius="0px"
        borderLeftWidth={mode === 'overlay' && sidePosition === 'right' && sideOpen ? '2px' : '0px'}
        borderRightWidth={mode === 'overlay' && sidePosition === 'left' && sideOpen ? '2px' : '0px'}
        left={sidePosition === 'left' ? '0px' : undefined}
        right={sidePosition === 'right' ? '0px' : undefined}
        maxInlineSize={mode === 'inline' ? inlineSize : '100%'}
        blockSize={blockSize}
        overflowX="hidden"
        pointerEvents="auto"
        position={mode === 'overlay' ? 'fixed' : undefined}
        top={mode === 'overlay' ? '0px' : undefined}
        bottom={mode === 'overlay' ? '0px' : undefined}
        overflowY={mode === 'overlay' ? 'auto' : 'hidden'}
        zIndex={mode === 'overlay' ? 'var(--neb-z-split-view-side)' : undefined}
      >
        <Box
          drawable
          borderRadius="0px"
          bgMode="filled"
          color={color}
          intent={intent}
          blockSize="100%"
          overflowY={sideOpen ? 'auto' : 'hidden'}
          overflowX="hidden"
        >
          <Resize property="inlineSize" visible={sideOpen} easing="cubic-bezier(0.4, 0, 0.2, 1)">
            <Box inlineSize={inlineSize} maxInlineSize="100dvw" paddingRight="2px">
              <Box>
                {mode === 'overlay' ? (
                  <Box display="flex" justifyContent="flex-end">
                    <Box padding="4px" paddingRight="2px" paddingBottom="24px">
                      <IconButton
                        iconName="close"
                        intent={intent || 'tertiary'}
                        scale="xs"
                        onClick={() => {
                          setSideOpen(false)
                        }}
                      />
                    </Box>
                  </Box>
                ) : null}
                <Box
                  padding={padding}
                  paddingInline={paddingInline}
                  paddingBlock={paddingBlock}
                  paddingTop={paddingTop}
                  paddingRight={paddingRight}
                  paddingBottom={paddingBottom}
                  paddingLeft={paddingLeft}
                >
                  {children}
                </Box>
              </Box>
            </Box>
          </Resize>
        </Box>
      </Box>
    </StylingIsland>
  )
}

SplitViewSide.displayName = 'SplitView.Side'
