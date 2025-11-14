import { ComponentMeta } from 'client/definitions'
import { SideNavProps, SideNav } from 'lib/components'

const SIDE_NAV_EXAMPLES_META: ComponentMeta<SideNavProps>['examples'] = [
  {
    description: 'Basic render case for SideNav.',
    jsx: (
      <SideNav>
        <SideNav.Category label="Category">
          <SideNav.Item href="/path">Item</SideNav.Item>
        </SideNav.Category>
      </SideNav>
    ),
    noSandBox: true,
    skip: true,
  },
  {
    description: 'Flat navigation.',
    jsx: (
      <SideNav>
        <SideNav.Item href="/path">Item 1</SideNav.Item>
        <SideNav.Item href="/path">Item 2</SideNav.Item>
        <SideNav.Item href="/path">Item 3</SideNav.Item>
      </SideNav>
    ),
    sandBoxWithNoPadding: true,
  },
  {
    description: 'Flat and expandable navigation together.',
    jsx: (
      <SideNav>
        <SideNav.Item href="/path">Flat item 1</SideNav.Item>
        <SideNav.Item href="/path">Flat item 2</SideNav.Item>
        <SideNav.Category label="Category 1">
          <SideNav.Item href="/path">Item 1</SideNav.Item>
          <SideNav.Item href="/path">Item 2</SideNav.Item>
          <SideNav.Item href="/path">Item 3</SideNav.Item>
        </SideNav.Category>
        <SideNav.Category label="Category 2">
          <SideNav.Item href="/path">Item 1</SideNav.Item>
          <SideNav.Item href="/path">Item 2</SideNav.Item>
          <SideNav.Item href="/path">Item 3</SideNav.Item>
        </SideNav.Category>
      </SideNav>
    ),
    sandBoxWithNoPadding: true,
  },
  {
    description: 'SideNav in single expand mode.',
    jsx: (
      <SideNav expandMode="single">
        <SideNav.Item href="/path">Flat item 1</SideNav.Item>
        <SideNav.Item href="/path">Flat item 2</SideNav.Item>
        <SideNav.Category label="Category 1">
          <SideNav.Item href="/path">Item 1</SideNav.Item>
          <SideNav.Item href="/path">Item 2</SideNav.Item>
          <SideNav.Item href="/path">Item 3</SideNav.Item>
        </SideNav.Category>
        <SideNav.Category label="Category 2">
          <SideNav.Item href="/path">Item 1</SideNav.Item>
          <SideNav.Item href="/path">Item 2</SideNav.Item>
          <SideNav.Item href="/path">Item 3</SideNav.Item>
        </SideNav.Category>
      </SideNav>
    ),
    sandBoxWithNoPadding: true,
  },
]

export { SIDE_NAV_EXAMPLES_META }
