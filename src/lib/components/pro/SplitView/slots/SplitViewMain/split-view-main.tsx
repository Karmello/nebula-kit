import { Box } from 'lib/components/core/Box'
import { IconButton } from 'lib/components/core/IconButton'
import { Spacer } from 'lib/components/core/Spacer'
import { useSlots } from 'lib/hooks'

import { getToggleIconName } from '../../helpers'
import { useSplitViewContext } from '../../providers/SplitViewProvider'
import { SplitViewMainProps } from './types'

export const SplitViewMain = ({
  // Box
  children,
  tagAttrs,
  tagRef,
  padding,
  paddingInline,
  paddingBlock,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
}: SplitViewMainProps) => {
  const { sideOpen, setSideOpen, sidePosition } = useSplitViewContext()

  const slots = useSlots<'SplitView.MainBar'>({
    componentName: 'SplitView.Main',
    slotsConfig: [{ name: 'SplitView.MainBar' }],
    childrenToVerify: children,
  })

  if (!slots) return null

  const { slotsByName, allNonSlots } = slots

  return (
    <Box
      tag="section"
      tagRef={tagRef}
      tagAttrs={tagAttrs}
      padding={padding}
      paddingInline={paddingInline}
      paddingBlock={paddingBlock}
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      minInlineSize="0px"
      overflow="clip"
    >
      <Box
        display="flex"
        alignItems="center"
        flexDirection={sidePosition === 'left' ? 'row' : 'row-reverse'}
        gap="16px"
      >
        <Box>
          <IconButton
            tagAttrs={{ 'aria-expanded': sideOpen }}
            iconName={getToggleIconName(sidePosition, sideOpen)}
            intent="tertiary"
            scale="xs"
            onClick={() => setSideOpen(!sideOpen)}
          />
        </Box>
        <Box flex="1" tagAttrs={{ style: { minInlineSize: '0px' } }}>
          {slotsByName['SplitView.MainBar']}
        </Box>
      </Box>
      <Spacer blockSize="8px" />
      {allNonSlots}
    </Box>
  )
}

SplitViewMain.displayName = 'SplitView.Main'
