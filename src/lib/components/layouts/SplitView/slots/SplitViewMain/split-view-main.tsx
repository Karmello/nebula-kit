import classNames from 'classnames'

import { Box, Flex, IconButton, Spacer } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import { SplitViewMainProps } from './definitions'
import { getToggleIconName } from '../../helpers'
import { useSplitViewContext } from '../../SplitViewProvider'

export const SplitViewMain = ({ children, tagAttrs, tagRef, ...paddings }: SplitViewMainProps) => {
  const { sideOpen, setSideOpen, sidePosition } = useSplitViewContext()

  return (
    <WithSlots<'SplitView.MainBar'>
      componentName="SplitView.Main"
      slotsConfig={[{ name: 'SplitView.MainBar' }]}
      childrenToVerify={children}
    >
      {({ slotsByName, allNonSlots }) => {
        return (
          <Box
            tag="section"
            tagAttrs={{
              ...tagAttrs,
              className: classNames(withPrefix('split-view-main'), tagAttrs?.className),
            }}
            tagRef={tagRef}
            intent="neutral"
            borderRadius={0}
            {...paddings}
          >
            <Flex alignItems="center" flexDirection={sidePosition === 'left' ? 'row' : 'row-reverse'} gap={7}>
              <IconButton
                tagAttrs={{
                  onClick: () => setSideOpen(!sideOpen),
                  'aria-expanded': sideOpen,
                }}
                iconName={getToggleIconName(sidePosition, sideOpen)}
                intent="tertiary"
                size="xs"
              />
              {slotsByName['SplitView.MainBar']}
            </Flex>
            <Spacer blockSize={5} />
            {allNonSlots}
          </Box>
        )
      }}
    </WithSlots>
  )
}

SplitViewMain.displayName = 'SplitView.Main'
