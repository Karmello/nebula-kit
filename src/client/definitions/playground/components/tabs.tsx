import { Tabs, TabsProps } from 'lib/components'

export type PropsFromTabsKey = (typeof PROPS_FROM_TABS)[number]

export const PROPS_FROM_TABS = [
  'color',
  'inlineSize',
  'intent',
  'orientation',
  'size',
  'variant',
] as const satisfies readonly (keyof TabsProps)[]

export const TABS_PRESETS = [
  {
    name: 'Default',
    props: {
      //
    } as Record<PropsFromTabsKey, unknown>,
  },
  {
    name: 'Custom',
    props: {
      inlineSize: '100%',
      variant: 'solid',
      intent: 'primary',
    } as Record<PropsFromTabsKey, unknown>,
  },
]

export const TabsTemplate = (props: any) => (
  <Tabs {...props}>
    <Tabs.Tab value={1} inlineSize="100px">
      First
    </Tabs.Tab>
    <Tabs.Tab value={2} inlineSize="100px">
      Second
    </Tabs.Tab>
    <Tabs.Tab value={3} inlineSize="100px">
      Third
    </Tabs.Tab>
    <Tabs.Tab value={4} inlineSize="100px">
      Fourth
    </Tabs.Tab>
    <Tabs.Tab value={5} inlineSize="100px">
      Fifth
    </Tabs.Tab>
    <Tabs.Panel value={1}>This is the first tab content.</Tabs.Panel>
    <Tabs.Panel value={2}>This is the second tab content.</Tabs.Panel>
    <Tabs.Panel value={3}>This is the third tab content.</Tabs.Panel>
    <Tabs.Panel value={4}>This is the fourth tab content.</Tabs.Panel>
    <Tabs.Panel value={5}>This is the fifth tab content.</Tabs.Panel>
  </Tabs>
)
