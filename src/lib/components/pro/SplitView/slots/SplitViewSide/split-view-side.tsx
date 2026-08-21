import { useRef } from 'react'

import { Box, IconButton, Resize } from 'lib/index.core'
import { FocusTrap, SplitViewSideProps } from 'lib/index.pro'

import { useSplitViewContext } from '../../SplitViewProvider'
import {
  DEFAULT_SPLIT_VIEW_SIDE_BLOCK_SIZE,
  DEFAULT_SPLIT_VIEW_SIDE_INLINE_SIZE,
  DEFAULT_SPLIT_VIEW_SIDE_INTENT,
} from './definitions'

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

  return (
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
      theme={{ base: 'global-flipped', [switchAt || 'lg']: 'global' }}
      variant="outline"
      color={color}
      intent={intent}
      surface="dividing"
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
      zIndex={mode === 'overlay' ? 20 : undefined}
      position={mode === 'overlay' ? 'fixed' : undefined}
      top={mode === 'overlay' ? '0px' : undefined}
      bottom={mode === 'overlay' ? '0px' : undefined}
      overflowY={mode === 'overlay' ? 'auto' : 'hidden'}
    >
      <Box
        drawable
        borderRadius="0px"
        theme={{ base: 'global-flipped', [switchAt || 'lg']: 'global' }}
        variant="solid"
        color={color}
        intent={intent}
        blockSize="100%"
        overflowY={sideOpen ? 'auto' : 'hidden'}
        overflowX="hidden"
      >
        <FocusTrap
          tagRef={finalRef}
          active={mode == 'overlay' && sideOpen}
          onFocusEscape={() => setSideOpen(false)}
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
        </FocusTrap>
      </Box>
    </Box>
  )
}

SplitViewSide.displayName = 'SplitView.Side'
