import { ComponentMeta } from 'client/definitions'

import { type TabsProps } from '../definitions'
import { Tabs } from '..'

const TABS_EXAMPLES_META: ComponentMeta<TabsProps>['examples'] = [
  {
    skip: true,
    jsx: (
      <Tabs>
        <Tabs.Tab value={1}>First</Tabs.Tab>
        <Tabs.Tab value={2}>Second</Tabs.Tab>
        <Tabs.Tab value={3}>Third</Tabs.Tab>
        <Tabs.Panel value={1}>This is the first tab content.</Tabs.Panel>
        <Tabs.Panel value={2}>This is the second tab content.</Tabs.Panel>
        <Tabs.Panel value={3}>This is the third tab content.</Tabs.Panel>
      </Tabs>
    ),
  },
  {
    description: 'Horizontal tab arrangement with the outline variant.',
    jsx: (
      <Tabs inlineSize="100%">
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
    ),
  },
  {
    description: 'Vertical tab arrangement with the outline variant.',
    jsx: (
      <Tabs inlineSize="100%" orientation="vertical">
        <Tabs.Tab value={1} inlineSize="110px">
          First
        </Tabs.Tab>
        <Tabs.Tab value={2}>Second</Tabs.Tab>
        <Tabs.Tab value={3}>Third</Tabs.Tab>
        <Tabs.Tab value={4}>Fourth</Tabs.Tab>
        <Tabs.Tab value={5}>Fifth</Tabs.Tab>
        <Tabs.Panel value={1}>This is the first tab content.</Tabs.Panel>
        <Tabs.Panel value={2}>This is the second tab content.</Tabs.Panel>
        <Tabs.Panel value={3}>This is the third tab content.</Tabs.Panel>
        <Tabs.Panel value={4}>This is the fourth tab content.</Tabs.Panel>
        <Tabs.Panel value={5}>This is the fifth tab content.</Tabs.Panel>
      </Tabs>
    ),
  },
  {
    description: 'Horizontal tab arrangement with the solid variant.',
    jsx: (
      <Tabs variant="solid" inlineSize="100%">
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
    ),
  },
  {
    description: 'Vertical tab arrangement with the solid variant.',
    jsx: (
      <Tabs variant="solid" inlineSize="100%" orientation="vertical">
        <Tabs.Tab value={1} inlineSize="110px">
          First
        </Tabs.Tab>
        <Tabs.Tab value={2}>Second</Tabs.Tab>
        <Tabs.Tab value={3}>Third</Tabs.Tab>
        <Tabs.Tab value={4}>Fourth</Tabs.Tab>
        <Tabs.Tab value={5}>Fifth</Tabs.Tab>
        <Tabs.Panel value={1}>This is the first tab content.</Tabs.Panel>
        <Tabs.Panel value={2}>This is the second tab content.</Tabs.Panel>
        <Tabs.Panel value={3}>This is the third tab content.</Tabs.Panel>
        <Tabs.Panel value={4}>This is the fourth tab content.</Tabs.Panel>
        <Tabs.Panel value={5}>This is the fifth tab content.</Tabs.Panel>
      </Tabs>
    ),
  },
]

export { TABS_EXAMPLES_META }
