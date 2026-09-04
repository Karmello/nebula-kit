import { SideNav } from 'lib/index.pro'
import { type DocExample } from 'client/definitions'

export const SIDE_NAV_EXAMPLES: DocExample[] = [
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
    description: 'Expandable navigation.',
    jsx: (
      <SideNav>
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
    description: 'Expandable navigation in a single expand mode.',
    jsx: (
      <SideNav expandMode="single">
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
    description: 'Expandable and flat navigation together.',
    jsx: (
      <SideNav>
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
        <SideNav.Item href="/path">Flat item 1</SideNav.Item>
        <SideNav.Item href="/path">Flat item 2</SideNav.Item>
      </SideNav>
    ),
    sandBoxWithNoPadding: true,
  },
]
