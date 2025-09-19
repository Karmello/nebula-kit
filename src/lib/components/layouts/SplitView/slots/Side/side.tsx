import classNames from 'classnames'

import { Box, DEFAULT_SPLIT_VIEW_SIDE_WIDTH, Flex, IconButton } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { SplitViewSideProps } from './definitions'
import { useSplitViewContext } from '../../SplitViewProvider'

export const Side = ({
  children,
  elemProps,
  elemRef,
  intent,
  inlineSize = DEFAULT_SPLIT_VIEW_SIDE_WIDTH,
}: SplitViewSideProps) => {
  const { sideOpen, setSideOpen, sidePosition, mode } = useSplitViewContext()

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
      intent={intent}
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
            size="sm"
          />
        </Flex>
      ) : null}
      {children}
    </Box>
  )
}

Side.displayName = 'SplitView.Side'
Side.slotName = 'Side'
