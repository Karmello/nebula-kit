import { useRef } from 'react'
import classNames from 'classnames'

import { Animate, Box, Flex, Button } from 'lib/components'
import { FocusTrap } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'
import { useNebkitStore } from 'lib/state'

import { SplitViewSideProps, DEFAULT_SPLIT_VIEW_SIDE_WIDTH } from './definitions'
import { useSplitViewContext } from '../../SplitViewProvider'

export const SplitViewSide = ({
  children,
  tagAttrs,
  tagRef,
  intent,
  borderIntent,
  inlineSize = DEFAULT_SPLIT_VIEW_SIDE_WIDTH,
}: SplitViewSideProps) => {
  const { borderWidth } = useNebkitStore()
  const { sideOpen, setSideOpen, sidePosition, switchAt, mode } = useSplitViewContext()

  const ref = useRef(null)

  return (
    <FocusTrap
      tagRef={tagRef || ref}
      active={mode == 'overlay' && sideOpen}
      onClose={() => setSideOpen(false)}
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
        intent={intent || { base: 'tertiary', [String(switchAt)]: 'neutral' }}
        borderIntent={borderIntent || { base: 'muted', [String(switchAt)]: 'neutral' }}
        borderLeftWidth={sidePosition === 'right' && sideOpen ? borderWidth : 0}
        borderRightWidth={sidePosition === 'left' && sideOpen ? borderWidth : 0}
        left={sidePosition === 'left' ? 0 : undefined}
        right={sidePosition === 'right' ? 0 : undefined}
        borderRadius={0}
        maxInlineSize={inlineSize}
        overflowY={sideOpen ? 'auto' : 'hidden'}
      >
        <Animate key={mode} property="inlineSize" visible={sideOpen}>
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
                    size="xs"
                  />
                </Box>
              </Flex>
            ) : null}
            {children}
          </Box>
        </Animate>
      </Box>
    </FocusTrap>
  )
}

SplitViewSide.displayName = 'SplitView.Side'
