import { ComponentMeta } from 'client/definitions'
import { Box, SplitView, Text } from 'lib/components'
import { SplitViewOwnProps } from 'lib/components/layouts/SplitView/definitions'

export default [
  {
    description:
      "Demonstrates SplitView filling its parent's height, with a side panel, a main content area, and an optional MainBar above the main content. Resize the viewport to a smaller width to see the side panel switch to its overlay version.",
    jsx: (
      <Box blockSize="500px">
        <SplitView>
          <SplitView.Side intent="secondary" inlineSize={{ base: '300px', md: '500px', lg: '150px' }}>
            <Box margin={5}>
              <Text noWrap>Side</Text>
            </Box>
          </SplitView.Side>
          <SplitView.Main padding={5}>
            <Text>Main</Text>
          </SplitView.Main>
          <SplitView.MainBar>
            <Text>MainBar</Text>
          </SplitView.MainBar>
        </SplitView>
      </Box>
    ),
    sandBoxWithNoPadding: true,
  },
] as ComponentMeta<SplitViewOwnProps>['examples']
