import classNames from 'classnames'

import { Box, Flex, IconButton } from 'lib/components'
import { FocusTrap } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import { useSplitViewContext } from '../../SplitViewProvider'
import { DEFAULT_SPLIT_VIEW_SIDE_WIDTH } from '../../definitions'
import { SplitViewSideProps } from './definitions'
import { useRef } from 'react'

export const SplitViewSide = ({
  children,
  tagAttrs,
  tagRef,
  intent,
  inlineSize = DEFAULT_SPLIT_VIEW_SIDE_WIDTH,
}: SplitViewSideProps) => {
  const { sideOpen, setSideOpen, sidePosition, mode, switchAt } = useSplitViewContext()

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
        left={sidePosition === 'left' ? 0 : undefined}
        right={sidePosition === 'right' ? 0 : undefined}
        intent={intent || { base: 'secondary', [String(switchAt)]: 'neutral' }}
        inlineSize={sideOpen ? inlineSize : 0}
        borderRadius={0}
      >
        {mode === 'overlay' ? (
          <Flex justifyContent="flex-end">
            <IconButton
              tagAttrs={{
                onClick: () => {
                  setSideOpen(false)
                },
              }}
              iconName="close"
              variant="ghost"
              intent="neutral"
              size="sm"
            />
          </Flex>
        ) : null}
        {children}
      </Box>
    </FocusTrap>
  )
}

SplitViewSide.displayName = 'SplitView.Side'
