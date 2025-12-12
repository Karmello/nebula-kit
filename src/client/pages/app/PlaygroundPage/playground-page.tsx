import { Box, Flex, Section, Spacer } from 'lib/components'

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
  PropsViewSwitch,
} from './components'

import { usePlaygroundStore } from './store'

export const PlaygroundPage = () => {
  const { view, getActiveSlot } = usePlaygroundStore()

  const activeSlot = getActiveSlot()

  return (
    <Box paddingTop="15px" paddingInline={{ base: '20px', lg: '50px' }} overflowY="hidden">
      <Section heading="Playground" intent="neutral" iconName="shapes">
        <Flex flexDirection={{ base: 'column', md: 'row-reverse' }} alignItems="stretch" gap="25px">
          <Flex.Item>
            <Flex flexDirection="column" alignItems="stretch" rowGap="25px">
              <Flex.Item>
                <Flex flexDirection="column" alignItems="stretch" rowGap="25px">
                  <Flex.Item>
                    <ComponentSelect />
                  </Flex.Item>
                  {activeSlot !== undefined ? (
                    <Flex.Item>
                      <SlotSelect />
                    </Flex.Item>
                  ) : null}
                  <Flex.Item>
                    <ResetPropsButton />
                  </Flex.Item>
                </Flex>
              </Flex.Item>
              <Flex.Item>
                <PropSelect />
                <Spacer blockSize="10px" />
                <SwitchPropViewButton />
              </Flex.Item>
              <Flex.Item>
                <PropEditor />
              </Flex.Item>
            </Flex>
          </Flex.Item>
          <Flex.Item flex={1}>
            <Flex columnGap="15px">
              <ViewSwitch />
              <PropsViewSwitch />
            </Flex>
            <Spacer blockSize="40px" />
            {view === 'canvas' ? <RenderPanel /> : <PropsViewer />}
          </Flex.Item>
        </Flex>
      </Section>
    </Box>
  )
}
