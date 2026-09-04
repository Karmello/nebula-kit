import { useEffect } from 'react'

import { Box, NEB_LENGTH, Section, Spacer, SplitView } from 'lib/components'
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
                    <Box display="flex" flexWrap="wrap" gap={NEB_LENGTH.px_008}>
                      <Box display="flex" flexWrap="wrap" gap={NEB_LENGTH.px_008}>
                        <TogglePropsButton />
                        <PredefinedExamples />
                      </Box>
                      <DocsButton />
                    </Box>
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
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="stretch"
                      rowGap={NEB_LENGTH.px_024}
                    >
                      <Box>
                        <ComponentSelect />
                      </Box>
                      <Box>
                        <Box
                          display="flex"
                          flexDirection="column"
                          alignItems="stretch"
                          rowGap={NEB_LENGTH.px_008}
                        >
                          <Box>
                            <PropSelect />
                          </Box>
                          <SwitchPropViewButton />
                        </Box>
                      </Box>
                      <Box>
                        <PropEditor />
                      </Box>
                    </Box>
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
