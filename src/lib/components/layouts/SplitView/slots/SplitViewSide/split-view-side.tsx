import classNames from 'classnames'

import { Box, Flex, IconButton } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { useSplitViewContext } from '../../SplitViewProvider'
import { DEFAULT_SPLIT_VIEW_SIDE_WIDTH } from '../../definitions'
import { SplitViewSideProps } from './definitions'

export const SplitViewSide = ({
  children,
  elemProps,
  elemRef,
  intent,
  inlineSize = DEFAULT_SPLIT_VIEW_SIDE_WIDTH,
}: SplitViewSideProps) => {
  const { sideOpen, setSideOpen, sidePosition, mode, switchAt } = useSplitViewContext()

  return (
    <Box
      elem="aside"
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('split-view-side'), elemProps?.className),
      }}
      elemRef={elemRef}
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
            elemProps={{
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
  )
}

SplitViewSide.displayName = 'SplitView.Side'
SplitViewSide.slotName = 'Side'
