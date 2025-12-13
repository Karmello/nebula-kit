import { Box, Flex, Section, Spacer, SplitView } from 'lib/components'

import {
  ComponentSelect,
  SlotSelect,
  PropSelect,
  PropEditor,
  RenderPanel,
  ViewSwitch,
  PropsViewer,
  ResetPropsButton,
  SwitchPropViewButton,
} from './components'

import { usePlaygroundStore } from './store'

export const PlaygroundPage = () => {
  const { view, getActiveSlot } = usePlaygroundStore()

  const activeSlot = getActiveSlot()

  return (
    <Box paddingTop="15px" paddingInline={{ base: '20px', lg: '50px' }} overflowY="hidden">
      <Section heading="Playground" intent="neutral" iconName="shapes">
        <SplitView sidePosition="right">
          <SplitView.Main>
            <SplitView.MainBar>
              <ViewSwitch />
            </SplitView.MainBar>
            <Spacer blockSize="25px" />
            {view === 'canvas' ? <RenderPanel /> : <PropsViewer />}
          </SplitView.Main>
          <SplitView.Side inlineSize="320px" intent={{ base: 'inverse', lg: 'neutral' }}>
            <Box padding={{ base: '10px', lg: '0px' }} paddingLeft={{ lg: '30px' }}>
              <Flex flexDirection="column" alignItems="stretch" rowGap="25px">
                <Flex.Item>
                  <Flex flexDirection="column" alignItems="stretch" rowGap="10px">
                    <Flex.Item>
                      <ComponentSelect />
                    </Flex.Item>
                    {activeSlot !== undefined ? <SlotSelect /> : null}
                  </Flex>
                </Flex.Item>
                <Flex.Item>
                  <Flex flexDirection="column" alignItems="stretch" rowGap="10px">
                    <Flex.Item>
                      <PropSelect />
                    </Flex.Item>
                    <ResetPropsButton />
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
