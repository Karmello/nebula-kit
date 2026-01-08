import { ComponentMeta } from 'client/definitions'
import { Tabs, TabsProps } from 'lib/components'

const TABS_EXAMPLES_META: ComponentMeta<TabsProps>['examples'] = [
  {
    jsx: (
      <Tabs variant="outline" intent="tertiary" color="blue">
        <Tabs.Tab value={1} iconName="blocks" iconPlacement="right">
          Tab 1
        </Tabs.Tab>
        <Tabs.Tab value={2}>Tab 2</Tabs.Tab>
        <Tabs.Tab value={3} disabled>
          Tab 3
        </Tabs.Tab>
        <Tabs.Panel value={1}>Panel content 1</Tabs.Panel>
        <Tabs.Panel value={2}>Panel content 2</Tabs.Panel>
        <Tabs.Panel value={3}>Panel content 3</Tabs.Panel>
      </Tabs>
    ),
  },
]

export { TABS_EXAMPLES_META }
