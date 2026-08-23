import { Tabs } from './'
import { type TabsProps } from './types'

export type PropsFromTabsKey = (typeof PROPS_FROM_TABS)[number]

export const PROPS_FROM_TABS = [
  'color',
  'direction',
  'intent',
  'size',
  'stretch',
] as const satisfies readonly (keyof TabsProps)[]

export const TABS_PRESETS = [
  {
    name: 'Default',
    props: {
      //
    },
  },
  {
    name: 'Custom',
    props: {
      intent: 'primary',
    },
  },
] satisfies {
  name: string
  props: Pick<TabsProps, PropsFromTabsKey>
}[]

export const TabsTemplate = (props: any) => (
  <Tabs {...props}>
    <Tabs.Tab value={1} minInlineSize="100px">
      First
    </Tabs.Tab>
    <Tabs.Tab value={2} minInlineSize="100px">
      Second
    </Tabs.Tab>
    <Tabs.Tab value={3} minInlineSize="100px">
      Third
    </Tabs.Tab>
    <Tabs.Tab value={4} minInlineSize="100px">
      Fourth
    </Tabs.Tab>
    <Tabs.Tab value={5} minInlineSize="100px">
      Fifth
    </Tabs.Tab>
    <Tabs.Panel value={1}>This is the first tab content.</Tabs.Panel>
    <Tabs.Panel value={2}>This is the second tab content.</Tabs.Panel>
    <Tabs.Panel value={3}>This is the third tab content.</Tabs.Panel>
    <Tabs.Panel value={4}>This is the fourth tab content.</Tabs.Panel>
    <Tabs.Panel value={5}>This is the fifth tab content.</Tabs.Panel>
  </Tabs>
)
