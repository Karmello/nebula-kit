import classNames from 'classnames'

import { Box, Flex, IconButton } from 'lib/components'
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

  return (
    <Box
      tag="aside"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('split-view-side'), tagAttrs?.className),
      }}
      tagRef={tagRef}
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
  )
}

SplitViewSide.displayName = 'SplitView.Side'
