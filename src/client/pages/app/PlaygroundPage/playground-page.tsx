import { useEffect } from 'react'

import META from 'client/meta'
import { Prop } from 'client/definitions'
import { Box, Section, Spacer, SplitView } from 'lib/components'

import { ComponentSelect, PropsEditor, RenderPanel } from './components'
import { usePlaygroundStore } from './use-playground-store'

export const PlaygroundPage = () => {
  const { componentName, setPropsEditorValues } = usePlaygroundStore()

  useEffect(() => {
    const componentProps = META[componentName][componentName].props
    let defaultValues: Record<string, unknown> = {}
    Object.keys(componentProps).map(propName => {
      defaultValues[propName] = (componentProps[propName as never] as Prop).defaultValue
    })
    setPropsEditorValues(defaultValues)
  }, [componentName])

  return (
    <Box paddingTop={15} paddingInline={{ base: 20, lg: 50 }} overflowY="hidden">
      <Section heading="Playground" intent="neutral" iconName="shapes">
        <SplitView sidePosition="right">
          <SplitView.Main>
            <SplitView.MainBar>
              <ComponentSelect />
            </SplitView.MainBar>
            <Spacer />
            <RenderPanel />
          </SplitView.Main>
          <SplitView.Side inlineSize="300px" intent={{ base: 'tertiary', lg: 'neutral' }}>
            <Box marginLeft={{ base: 10, lg: 20 }} marginRight={{ base: 10, lg: 0 }}>
              <Section heading="Properties" size="sm" iconName="settings">
                <Box
                  paddingRight={10}
                  maxBlockSize={{ base: 'calc(100dvh - 130px)', lg: 'calc(100dvh - 230px)' }}
                  overflowY="auto"
                >
                  <PropsEditor />
                </Box>
              </Section>
            </Box>
          </SplitView.Side>
        </SplitView>
      </Section>
    </Box>
  )
}
