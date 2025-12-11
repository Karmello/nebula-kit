import classNames from 'classnames'

import { Box, Flex, Spacer, Button } from 'lib/components'
import { WithSlots } from 'lib/components/core/internal'
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
            borderRadius="0px"
            {...paddings}
          >
            <Flex
              alignItems="center"
              flexDirection={sidePosition === 'left' ? 'row' : 'row-reverse'}
              gap="15px"
            >
              <Button
                tagAttrs={{
                  onClick: () => setSideOpen(!sideOpen),
                  'aria-expanded': sideOpen,
                }}
                iconName={getToggleIconName(sidePosition, sideOpen)}
                intent="neutral"
                size="sm"
              />
              {slotsByName['SplitView.MainBar']}
            </Flex>
            <Spacer blockSize="10px" />
            {allNonSlots}
          </Box>
        )
      }}
    </WithSlots>
  )
}

SplitViewMain.displayName = 'SplitView.Main'
