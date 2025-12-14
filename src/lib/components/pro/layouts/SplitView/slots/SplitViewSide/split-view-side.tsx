import { useRef } from 'react'
import classNames from 'classnames'

import { Resize, Box, Flex, Button, FocusTrap } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { useNebkitStore } from 'lib/state'
import { BOX_BORDER_WIDTH } from 'lib/components/core/base/Box/definitions'

import { SplitViewSideProps, DEFAULT_SPLIT_VIEW_SIDE_WIDTH } from './definitions'
import { useSplitViewContext } from '../../SplitViewProvider'

export const SplitViewSide = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
  // Box
  theme,
  color,
  intent,
  borderIntent,
  inlineSize = DEFAULT_SPLIT_VIEW_SIDE_WIDTH,
}: SplitViewSideProps) => {
  const { brand } = useNebkitStore()
  const { sideOpen, setSideOpen, sidePosition, switchAt, mode } = useSplitViewContext()

  const ref = useRef(null)

  return (
    <FocusTrap
      tagRef={tagRef || ref}
      active={mode == 'overlay' && sideOpen}
      onFocusEscape={() => setSideOpen(false)}
      disableEscapeOnOutsideClick
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
        variant="solid"
        color={color || brand}
        intent={intent || { base: 'tertiary', [String(switchAt)]: 'neutral' }}
        borderIntent={borderIntent || { base: 'muted', [String(switchAt)]: 'neutral' }}
        borderLeftWidth={sidePosition === 'right' && sideOpen ? BOX_BORDER_WIDTH : '0px'}
        borderRightWidth={sidePosition === 'left' && sideOpen ? BOX_BORDER_WIDTH : '0px'}
        left={sidePosition === 'left' ? '0px' : undefined}
        right={sidePosition === 'right' ? '0px' : undefined}
        maxInlineSize={inlineSize}
        overflowY={sideOpen ? 'auto' : 'hidden'}
      >
        <Resize key={mode} property="inlineSize" visible={sideOpen}>
          <Box inlineSize={inlineSize} paddingRight={BOX_BORDER_WIDTH}>
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
            {children}
          </Box>
        </Resize>
      </Box>
    </FocusTrap>
  )
}

SplitViewSide.displayName = 'SplitView.Side'
