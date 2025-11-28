import { useRef } from 'react'
import classNames from 'classnames'

import { Resize, Box, Flex, Button, FocusTrap } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { useNebkitStore } from 'lib/state'
import { BOX_BORDER_WIDTH } from 'lib/components/core/base/Box/definitions'

import { SplitViewSideProps, DEFAULT_SPLIT_VIEW_SIDE_WIDTH } from './definitions'
import { useSplitViewContext } from '../../SplitViewProvider'

export const SplitViewSide = ({
  children,
  tagAttrs,
  tagRef,
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
        variant="solid"
        color={color || brand}
        intent={intent || { base: 'tertiary', [String(switchAt)]: 'neutral' }}
        borderIntent={borderIntent || { base: 'muted', [String(switchAt)]: 'neutral' }}
        borderLeftWidth={sidePosition === 'right' && sideOpen ? BOX_BORDER_WIDTH : 0}
        borderRightWidth={sidePosition === 'left' && sideOpen ? BOX_BORDER_WIDTH : 0}
        left={sidePosition === 'left' ? 0 : undefined}
        right={sidePosition === 'right' ? 0 : undefined}
        borderRadius={0}
        maxInlineSize={inlineSize}
        overflowY={sideOpen ? 'auto' : 'hidden'}
      >
        <Resize key={mode} property="inlineSize" visible={sideOpen}>
          <Box inlineSize={inlineSize}>
            {mode === 'overlay' ? (
              <Flex justifyContent="flex-end">
                <Box padding={6} paddingBottom={20}>
                  <Button
                    tagAttrs={{
                      onClick: () => {
                        setSideOpen(false)
                      },
                    }}
                    iconName="close"
                    intent={intent || 'tertiary'}
                    size="sm"
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
