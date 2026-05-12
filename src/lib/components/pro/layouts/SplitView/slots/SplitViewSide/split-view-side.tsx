import { useRef } from 'react'
import classNames from 'classnames'

import { Resize, Box, Flex, Button, FocusTrap } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { SplitViewSideProps, DEFAULT_SPLIT_VIEW_SIDE_WIDTH, DEFAULT_SPLIT_VIEW_SIDE_INTENT } from './definitions'
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
  intent = DEFAULT_SPLIT_VIEW_SIDE_INTENT,
  inlineSize = DEFAULT_SPLIT_VIEW_SIDE_WIDTH,
  padding,
  paddingInline,
  paddingBlock,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
}: SplitViewSideProps) => {
  const { sideOpen, setSideOpen, sidePosition, mode } = useSplitViewContext()

  const ref = useRef(null)

  return (
    <FocusTrap tagRef={tagRef || ref} active={mode == 'overlay' && sideOpen} onFocusEscape={() => setSideOpen(false)}>
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
        intent={intent}
        surface="dividing"
        borderWidth="0px"
        borderRadius="0px"
        borderLeftWidth={mode === 'overlay' && sidePosition === 'right' && sideOpen ? 'var(--neb-length-3xs)' : '0px'}
        borderRightWidth={mode === 'overlay' && sidePosition === 'left' && sideOpen ? 'var(--neb-length-3xs)' : '0px'}
        left={sidePosition === 'left' ? '0px' : undefined}
        right={sidePosition === 'right' ? '0px' : undefined}
        maxInlineSize={mode === 'inline' ? inlineSize : undefined}
      >
        <Box
          drawable
          borderRadius="0px"
          variant="solid"
          color={color}
          intent={intent}
          blockSize="100%"
          overflowY={sideOpen ? 'auto' : 'hidden'}
          overflowX="hidden"
        >
          <Resize property="inlineSize" visible={sideOpen} easing="cubic-bezier(0.4, 0, 0.2, 1)">
            <Box inlineSize={inlineSize} maxInlineSize="100dvw" paddingRight="3xs">
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
                <Box
                  theme={theme}
                  brand={brand}
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
    </FocusTrap>
  )
}

SplitViewSide.displayName = 'SplitView.Side'
