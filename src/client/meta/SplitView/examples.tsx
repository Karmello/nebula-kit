import { ComponentMeta } from 'client/definitions'
import { Box, SplitView, Text } from 'lib/components'
import { SplitViewProps } from 'lib/components/layouts/SplitView/definitions'

const SPLIT_VIEW_EXAMPLES_META: ComponentMeta<SplitViewProps>['examples'] = [
  {
    description: 'Basic render case for SplitView.',
    jsx: (
      <SplitView>
        <SplitView.Side>Side</SplitView.Side>
        <SplitView.Main>Main</SplitView.Main>
        <SplitView.MainBar>MainBar</SplitView.MainBar>
      </SplitView>
    ),
    noSandBox: true,
  },
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
  {
    description:
      'Demonstrates using a render function in the Side slot to access SplitView context values and control its open state in overlay mode.',
    code: `
<SplitView>
  <SplitView.Side>
    {({ setSideOpen, mode }) => {
      return (
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
      )
    }}
  </SplitView.Side>
  <SplitView.Main>Main</SplitView.Main>
  <SplitView.MainBar>MainBar</SplitView.MainBar>
</SplitView>`,
    noSandBox: true,
  },
]

export { SPLIT_VIEW_EXAMPLES_META }
