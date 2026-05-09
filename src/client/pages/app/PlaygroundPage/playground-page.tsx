import { useEffect } from 'react'

import { useAppStore } from 'client/store'
import { Box, Flex, Section, Spacer, SplitView } from 'lib/components'
import { LIB_PREFIX } from 'lib/definitions'

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
} from './components'

import { getInitialState } from './store/get-initial-state'

export const PlaygroundPage = () => {
  const theme = useAppStore(state => state.theme)

  useEffect(() => {
    const key = `${LIB_PREFIX}.playground`
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify({ state: getInitialState() }))
    }
  }, [])

  return (
    <Box paddingTop="15px" paddingInline={{ base: '20px', lg: '50px' }} overflowY="hidden">
      <Section heading="Playground" iconName="flask-conical">
        <Spacer blockSize="xs" />
        <SplitView sidePosition="right">
          {({ mode, setSideOpen }) => {
            return (
              <>
                <SplitView.Main>
                  <SplitView.MainBar>
                    <Flex flexWrap="wrap" gap="xs">
                      <Flex flexWrap="wrap" gap="xs">
                        <TogglePropsButton />
                        <PredefinedExamples />
                      </Flex>
                      <DocsButton />
                    </Flex>
                  </SplitView.MainBar>
                  <Spacer blockSize="md" />
                  <RenderPanel />
                  <Spacer blockSize="lg" />
                  <PropsViewer
                    handleSideVisibility={() => {
                      if (mode === 'overlay') setSideOpen(true)
                    }}
                  />
                </SplitView.Main>
                <SplitView.Side
                  theme={{ base: theme === 'light' ? 'dark' : 'light', lg: theme }}
                  intent="neutral"
                  inlineSize="320px"
                >
                  <Box padding={{ base: '10px', lg: '0px' }} paddingLeft={{ lg: '30px' }}>
                    <Flex flexDirection="column" alignItems="stretch" rowGap="md">
                      <Flex.Item>
                        <ComponentSelect />
                      </Flex.Item>
                      <Flex.Item>
                        <Flex flexDirection="column" alignItems="stretch" rowGap="xs">
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
