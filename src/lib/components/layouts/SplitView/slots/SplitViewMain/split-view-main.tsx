import { useLayoutEffect } from 'react'
import classNames from 'classnames'

import { Box, Flex, IconButton, Spacer } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { SplitViewMainProps } from './definitions'
import { getToggleIconName } from '../../helpers'
import { useSplitViewContext } from '../../SplitViewProvider'

export const SplitViewMain = ({ children, tagAttrs, tagRef, ...paddings }: SplitViewMainProps) => {
  const { sideOpen, setSideOpen, sidePosition, slots, mode } = useSplitViewContext()

  useLayoutEffect(() => {
    setSideOpen(mode === 'inline')
  }, [mode])

  return (
    <Box
      tag="section"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('split-view-main'), tagAttrs?.className),
      }}
      tagRef={tagRef}
      borderRadius={0}
      {...paddings}
    >
      <Flex alignItems="center" flexDirection={sidePosition === 'left' ? 'row' : 'row-reverse'} gap={7}>
        <IconButton
          tagAttrs={{
            onClick: () => setSideOpen(!sideOpen),
          }}
          iconName={getToggleIconName(sidePosition, sideOpen)}
          intent="tertiary"
          size="sm"
        />
        {slots['SplitView.MainBar']}
      </Flex>
      <Spacer blockSize={5} />
      <Box>{children}</Box>
    </Box>
  )
}

SplitViewMain.displayName = 'SplitView.Main'
