import { Tabs } from 'lib/index.pro'
import { type DocExample } from 'client/definitions'

export const TABS_EXAMPLES: DocExample[] = [
  {
    skip: true,
    jsx: (
      <Tabs>
        <Tabs.Tab value={1} minInlineSize="100px">
          First
        </Tabs.Tab>
        <Tabs.Tab value={2} minInlineSize="100px">
          Second
        </Tabs.Tab>
        <Tabs.Tab value={3} minInlineSize="100px">
          Third
        </Tabs.Tab>
        <Tabs.Panel value={1}>This is the first tab content.</Tabs.Panel>
        <Tabs.Panel value={2}>This is the second tab content.</Tabs.Panel>
        <Tabs.Panel value={3}>This is the third tab content.</Tabs.Panel>
      </Tabs>
    ),
  },
  {
    description: 'Horizontal tab arrangement.',
    jsx: (
      <Tabs>
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
    ),
  },
  {
    description: 'Horizontal tab arrangement with stretched tabs.',
    jsx: (
      <Tabs stretch>
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
    ),
  },
  {
    description: 'Vertical tab arrangement.',
    jsx: (
      <Tabs direction="column">
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
    ),
  },
]
