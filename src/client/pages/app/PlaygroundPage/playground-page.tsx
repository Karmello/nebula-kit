import { useAppStore } from 'client/store'
import { Box, Flex, Section, Spacer, SplitView, Text } from 'lib/components'

import {
  ComponentSelect,
  PropSelect,
  PropEditor,
  RenderPanel,
  TogglePropsButton,
  PropsViewer,
  SwitchPropViewButton,
  DocsButton,
  PredefinedExamples,
  ResetPropsButton,
} from './components'

import { usePlaygroundStore } from './store'

export const PlaygroundPage = () => {
  const theme = useAppStore(state => state.theme)
  const activeComponent = usePlaygroundStore(state => state.activeComponent)

  return (
    <Box paddingTop="15px" paddingInline={{ base: '20px', lg: '50px' }} overflowY="hidden">
      <Section heading="Playground" iconName="shapes">
        <SplitView sidePosition="right">
          {({ mode, setSideOpen }) => {
            return (
              <>
                <SplitView.Main>
                  <SplitView.MainBar>
                    <Flex flexWrap="wrap" gap="12px">
                      <Text typography="h6" intent="primary" color="blue">{`<${activeComponent}>`}</Text>
                      <DocsButton />
                      <TogglePropsButton />
                      <ResetPropsButton />
                    </Flex>
                    <Spacer blockSize="20px" />
                    <Flex flexWrap="wrap" columnGap="7px">
                      <PredefinedExamples />
                    </Flex>
                  </SplitView.MainBar>
                  <Spacer blockSize="30px" />
                  <RenderPanel />
                  <Spacer blockSize="50px" />
                  <PropsViewer
                    handleSideVisibility={() => {
                      if (mode === 'overlay') setSideOpen(true)
                    }}
                  />
                </SplitView.Main>
                <SplitView.Side
                  theme={{ base: theme === 'light' ? 'dark' : 'light', lg: theme }}
                  inlineSize="320px"
                >
                  <Box padding={{ base: '10px', lg: '0px' }} paddingLeft={{ lg: '30px' }}>
                    <Flex flexDirection="column" alignItems="stretch" rowGap="25px">
                      <Flex.Item>
                        <ComponentSelect />
                      </Flex.Item>
                      <Flex.Item>
                        <Flex flexDirection="column" alignItems="stretch" rowGap="10px">
                          <Flex.Item>
                            <PropSelect />
                          </Flex.Item>
                          <SwitchPropViewButton />
                        </Flex>
                      </Flex.Item>
                      <Flex.Item>
                        <PropEditor />
                      </Flex.Item>
                    </Flex>
                  </Box>
                </SplitView.Side>
              </>
            )
          }}
        </SplitView>
      </Section>
    </Box>
  )
}
