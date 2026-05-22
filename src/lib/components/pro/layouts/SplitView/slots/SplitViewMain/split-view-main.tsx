import classNames from 'classnames'

import { Box, Flex, Spacer, Button } from 'lib/components'
import { WithSlots } from 'lib/components/core/internal'
import { withPrefix } from 'lib/helpers'

import { SplitViewMainProps } from './definitions'
import { getToggleIconName } from '../../helpers'
import { useSplitViewContext } from '../../SplitViewProvider'

export const SplitViewMain = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
  // Box
  padding,
  paddingInline,
  paddingBlock,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
}: SplitViewMainProps) => {
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
            padding={padding}
            paddingInline={paddingInline}
            paddingBlock={paddingBlock}
            paddingTop={paddingTop}
            paddingRight={paddingRight}
            paddingBottom={paddingBottom}
            paddingLeft={paddingLeft}
          >
            <Flex alignItems="center" flexDirection={sidePosition === 'left' ? 'row' : 'row-reverse'} gap="sm">
              <Flex.Item>
                <Button
                  tagAttrs={{
                    onClick: () => setSideOpen(!sideOpen),
                    'aria-expanded': sideOpen,
                  }}
                  iconName={getToggleIconName(sidePosition, sideOpen)}
                  intent="tertiary"
                  size="xs"
                />
              </Flex.Item>
              <Flex.Item flex="1" tagAttrs={{ style: { minInlineSize: '0px' } }}>
                {slotsByName['SplitView.MainBar']}
              </Flex.Item>
            </Flex>
            <Spacer blockSize="xs" />
            {allNonSlots}
          </Box>
        )
      }}
    </WithSlots>
  )
}

SplitViewMain.displayName = 'SplitView.Main'
