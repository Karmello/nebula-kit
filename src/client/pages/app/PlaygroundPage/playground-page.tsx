import { useEffect } from 'react'

import { Box, Flex, Section, Spacer, SplitView } from 'lib/components'
import { LIB_PREFIX } from 'lib/constants'
import { getInitialState, usePlaygroundStore } from 'client/store'

import {
  ComponentSelect,
  DocsButton,
  PredefinedExamples,
  PropEditor,
  PropSelect,
  PropsViewer,
  RenderPanel,
  SwitchPropViewButton,
  TogglePropsButton,
} from './components'

export const PlaygroundPage = () => {
  const activeComponent = usePlaygroundStore(state => state.activeComponent)

  useEffect(() => {
    const key = `${LIB_PREFIX}.playground`
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify({ state: getInitialState() }))
    }
  }, [])

  return (
    <Box paddingTop="16px" paddingInline={{ base: '24px', lg: '48px' }} overflowY="hidden">
      <Section size="lg" heading={`Playground (${activeComponent})`} iconName="flask-conical">
        <Spacer blockSize="8px" />
        <SplitView sidePosition="right">
          {({ mode, setSideOpen }) => {
            return (
              <>
                <SplitView.Main>
                  <SplitView.MainBar>
                    <Flex flexWrap="wrap" gap="8px">
                      <Flex flexWrap="wrap" gap="8px">
                        <TogglePropsButton />
                        <PredefinedExamples />
                      </Flex>
                      <DocsButton />
                    </Flex>
                  </SplitView.MainBar>
                  <Spacer blockSize="24px" />
                  <RenderPanel />
                  <Spacer blockSize="48px" />
                  <PropsViewer
                    handleSideVisibility={() => {
                      if (mode === 'overlay') setSideOpen(true)
                    }}
                  />
                </SplitView.Main>
                <SplitView.Side intent="neutral" inlineSize="320px">
                  <Box padding={{ base: '10px', lg: '0px' }} paddingLeft={{ lg: '30px' }}>
                    <Flex flexDirection="column" alignItems="stretch" rowGap="24px">
                      <Flex.Item>
                        <ComponentSelect />
                      </Flex.Item>
                      <Flex.Item>
                        <Flex flexDirection="column" alignItems="stretch" rowGap="8px">
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
