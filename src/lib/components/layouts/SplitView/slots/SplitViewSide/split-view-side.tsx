import { useCallback, useRef } from 'react'
import classNames from 'classnames'

import { Animate, Box, Flex, IconButton } from 'lib/components'
import { DEFAULT_ANIMATE_DURATION } from 'lib/components/utility/Animate/definitions'
import { FocusTrap } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import { useSplitViewContext } from '../../SplitViewProvider'
import { DEFAULT_SPLIT_VIEW_SIDE_WIDTH } from '../../definitions'
import { SplitViewSideProps } from './definitions'

export const SplitViewSide = ({
  children,
  tagAttrs,
  tagRef,
  intent,
  inlineSize = DEFAULT_SPLIT_VIEW_SIDE_WIDTH,
}: SplitViewSideProps) => {
  const { sideOpen, setSideOpen, sidePosition, mode, switchAt } = useSplitViewContext()

  const ref = useRef(null)

  const setSideOpenASync = useCallback(
    async (sideOpen: boolean) =>
      new Promise<boolean>(resolve => {
        setSideOpen(sideOpen)
        setTimeout(() => resolve(sideOpen), DEFAULT_ANIMATE_DURATION)
      }),
    []
  )

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
        intent={intent || { base: 'secondary', [String(switchAt)]: 'neutral' }}
        left={sidePosition === 'left' ? 0 : undefined}
        right={sidePosition === 'right' ? 0 : undefined}
        borderRadius={0}
      >
        <Animate property="inlineSize" visible={sideOpen}>
          <Box inlineSize={inlineSize}>
            {mode === 'overlay' ? (
              <Flex justifyContent="flex-end">
                <Box padding={3} paddingBottom={10}>
                  <IconButton
                    tagAttrs={{
                      onClick: () => {
                        setSideOpen(false)
                      },
                    }}
                    iconName="close"
                    intent={intent || 'secondary'}
                    size="sm"
                  />
                </Box>
              </Flex>
            ) : null}
            {typeof children === 'function'
              ? children({
                  setSideOpen: setSideOpenASync,
                  mode,
                })
              : children}
          </Box>
        </Animate>
      </Box>
    </FocusTrap>
  )
}

SplitViewSide.displayName = 'SplitView.Side'
