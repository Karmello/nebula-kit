import { useEffect } from 'react'

import { Box, Flex, NEB_LENGTH, Section, Spacer, SplitView } from 'lib/components'
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
    <Box
      paddingTop={NEB_LENGTH.px_016}
      paddingInline={{ base: NEB_LENGTH.px_024, lg: NEB_LENGTH.px_048 }}
      overflowY="hidden"
    >
      <Section size="lg" heading={`Playground (${activeComponent})`} iconName="flask-conical">
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <SplitView sidePosition="right">
          {({ mode, setSideOpen }) => {
            return (
              <>
                <SplitView.Main>
                  <SplitView.MainBar>
                    <Flex flexWrap="wrap" gap={NEB_LENGTH.px_008}>
                      <Flex flexWrap="wrap" gap={NEB_LENGTH.px_008}>
                        <TogglePropsButton />
                        <PredefinedExamples />
                      </Flex>
                      <DocsButton />
                    </Flex>
                  </SplitView.MainBar>
                  <Spacer blockSize={NEB_LENGTH.px_024} />
                  <RenderPanel />
                  <Spacer blockSize={NEB_LENGTH.px_048} />
                  <PropsViewer
                    handleSideVisibility={() => {
                      if (mode === 'overlay') setSideOpen(true)
                    }}
                  />
                </SplitView.Main>
                <SplitView.Side intent="neutral" inlineSize="320px">
                  <Box
                    padding={{ base: NEB_LENGTH.px_012, lg: NEB_LENGTH.px_000 }}
                    paddingLeft={{ lg: NEB_LENGTH.px_032 }}
                  >
                    <Flex flexDirection="column" alignItems="stretch" rowGap={NEB_LENGTH.px_024}>
                      <Flex.Item>
                        <ComponentSelect />
                      </Flex.Item>
                      <Flex.Item>
                        <Flex
                          flexDirection="column"
                          alignItems="stretch"
                          rowGap={NEB_LENGTH.px_008}
                        >
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
