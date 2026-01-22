import { useRef } from 'react'
import classNames from 'classnames'

import { Resize, Box, Flex, Button, FocusTrap } from 'lib/components'
import { IslandProvider } from 'lib/components/core/internal'
import { BOX_BORDER_WIDTH } from 'lib/components/core/base/Box/definitions'
import { withPrefix } from 'lib/helpers'

import { SplitViewSideProps, DEFAULT_SPLIT_VIEW_SIDE_WIDTH } from './definitions'
import { useSplitViewContext } from '../../SplitViewProvider'

export const SplitViewSide = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
  // Box
  theme,
  brand,
  color,
  intent,
  inlineSize = DEFAULT_SPLIT_VIEW_SIDE_WIDTH,
  // own
  borderIntent,
}: SplitViewSideProps) => {
  const { sideOpen, setSideOpen, sidePosition, switchAt, mode } = useSplitViewContext()

  const ref = useRef(null)

  return (
    <FocusTrap
      tagRef={tagRef || ref}
      active={mode == 'overlay' && sideOpen}
      onFocusEscape={() => setSideOpen(false)}
    >
      <Box
        tag="aside"
        tagAttrs={{
          ...tagAttrs,
          className: classNames(withPrefix('split-view-side'), tagAttrs?.className),
          inert: !sideOpen,
          role: mode === 'overlay' ? 'dialog' : 'complementary',
          'aria-modal': mode === 'overlay' ? true : undefined,
        }}
        tagRef={tagRef || ref}
        drawable
        theme={theme}
        brand={brand}
        variant="outline"
        color={color}
        intent={borderIntent || { base: 'muted', [String(switchAt)]: 'neutral' }}
        borderWidth="0px"
        borderRadius="0px"
        borderLeftWidth={
          mode === 'overlay' && sidePosition === 'right' && sideOpen ? BOX_BORDER_WIDTH : '0px'
        }
        borderRightWidth={
          mode === 'overlay' && sidePosition === 'left' && sideOpen ? BOX_BORDER_WIDTH : '0px'
        }
        left={sidePosition === 'left' ? '0px' : undefined}
        right={sidePosition === 'right' ? '0px' : undefined}
        maxInlineSize={mode === 'inline' ? inlineSize : undefined}
      >
        <Box
          drawable
          borderRadius="0px"
          variant="solid"
          color={color}
          intent={intent || { base: 'tertiary', [String(switchAt)]: 'neutral' }}
          blockSize="100%"
          overflowY={sideOpen ? 'auto' : 'hidden'}
          overflowX="hidden"
        >
          <Resize property="inlineSize" visible={sideOpen}>
            <Box inlineSize={inlineSize} maxInlineSize="100dvw" paddingRight={BOX_BORDER_WIDTH}>
              <Box>
                {mode === 'overlay' ? (
                  <Flex justifyContent="flex-end">
                    <Box padding="6px" paddingBottom="20px">
                      <Button
                        tagAttrs={{
                          onClick: () => {
                            setSideOpen(false)
                          },
                        }}
                        iconName="close"
                        intent={intent || 'tertiary'}
                        size="xs"
                      />
                    </Box>
                  </Flex>
                ) : null}
                <IslandProvider theme={theme} brand={brand}>
                  {children}
                </IslandProvider>
              </Box>
            </Box>
          </Resize>
        </Box>
      </Box>
    </FocusTrap>
  )
}

SplitViewSide.displayName = 'SplitView.Side'
