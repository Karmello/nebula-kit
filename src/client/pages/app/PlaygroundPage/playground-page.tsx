import { Box, Flex, Section, Spacer } from 'lib/components'

import {
  ComponentSelect,
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
  const { view } = usePlaygroundStore()

  return (
    <Box paddingTop="15px" paddingInline={{ base: '20px', lg: '50px' }} overflowY="hidden">
      <Section heading="Playground" intent="neutral" iconName="shapes">
        <Flex flexDirection={{ base: 'column', md: 'row-reverse' }} alignItems="stretch" gap="25px">
          <Flex.Item>
            <Flex flexDirection="column" alignItems="stretch" rowGap="25px">
              <Flex.Item>
                <ComponentSelect />
                <Spacer blockSize="10px" />
                <ResetPropsButton />
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
            <ViewSwitch />
            <Spacer />
            {view === 'canvas' ? <RenderPanel /> : <PropsViewer />}
          </Flex.Item>
        </Flex>
      </Section>
    </Box>
  )
}
