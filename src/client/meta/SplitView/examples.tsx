import { ComponentMeta } from 'client/definitions'
import { Box, SplitView, SplitViewProps, Text } from 'lib/components'

const SPLIT_VIEW_EXAMPLES_META: ComponentMeta<SplitViewProps>['examples'] = [
  {
    description: 'Basic render case for SplitView.',
    jsx: (
      <SplitView>
        <SplitView.Side>Side</SplitView.Side>
        <SplitView.Main>
          <SplitView.MainBar>MainBar</SplitView.MainBar>
          Main
        </SplitView.Main>
      </SplitView>
    ),
    noSandBox: true,
    skip: true,
  },
  {
    description:
      "SplitView with side panel, main content area and MainBar above the main content. It fills its parent's height. Resize the viewport to a smaller width to see the side panel switch to its overlay version.",
    jsx: (
      <Box blockSize="500px">
        <SplitView>
          <SplitView.Side intent="secondary" inlineSize={{ base: '300px', md: '500px', lg: '150px' }}>
            <Box margin="10px">
              <Text noWrap>Side</Text>
            </Box>
          </SplitView.Side>
          <SplitView.Main padding="10px">
            <SplitView.MainBar>
              <Text>MainBar</Text>
            </SplitView.MainBar>
            <Text>Main</Text>
          </SplitView.Main>
        </SplitView>
      </Box>
    ),
    sandBoxWithNoPadding: true,
  },
  {
    description: 'Using render function to access SplitView context and control its open state in overlay mode.',
    code: `
<SplitView>
  {({ setSideOpen, mode }) => (
    <>
      <SplitView.Side>
        <Button
          tagAttrs={{
            onClick: () => {
              // auto-close side panel on button click
              if (mode === 'overlay') {
                await setSideOpen(false)
              }
              // navigate to different route when animation done
              ...
            },
          }}
        >
          Menu button
        </Button>
      </SplitView.Side>
      <SplitView.Main>
        <SplitView.MainBar>MainBar</SplitView.MainBar>
        Main
      </SplitView.Main>
    </>
  )}
</SplitView>`,
    noSandBox: true,
  },
]

export { SPLIT_VIEW_EXAMPLES_META }
