import { Box, Flex, Section, Spacer, SplitView, Text } from 'lib/components'
import { useNebkitStore } from 'lib/state'

import {
  ComponentSelect,
  PropSelect,
  PropEditor,
  RenderPanel,
  TogglePropsButton,
  PropsViewer,
  SwitchPropViewButton,
  DocsButton,
} from './components'

import { usePlaygroundStore } from './store'

export const PlaygroundPage = () => {
  const { theme } = useNebkitStore()
  const { activeComponent } = usePlaygroundStore()

  return (
    <Box paddingTop="15px" paddingInline={{ base: '20px', lg: '50px' }} overflowY="hidden">
      <Section heading="Playground" iconName="shapes">
        <SplitView sidePosition="right">
          <SplitView.Main>
            <SplitView.MainBar>
              <Flex alignItems="center" columnGap="20px">
                <Text typography="h6" intent="primary" color="blue">{`<${activeComponent}>`}</Text>
                <Flex columnGap="7px">
                  <DocsButton />
                  <TogglePropsButton />
                </Flex>
              </Flex>
            </SplitView.MainBar>
            <Spacer blockSize="40px" />
            <RenderPanel />
            <Spacer blockSize="75px" />
            <PropsViewer />
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
        </SplitView>
      </Section>
    </Box>
  )
}
