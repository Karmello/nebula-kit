import { ComponentMeta } from 'client/definitions'
import { SideNavProps, SideNav } from 'lib/components'

const SIDE_NAV_EXAMPLES_META: ComponentMeta<SideNavProps>['examples'] = [
  {
    description: 'Basic render case for SideNav.',
    jsx: (
      <SideNav>
        <SideNav.Category label="Category">
          <SideNav.Item>Item</SideNav.Item>
        </SideNav.Category>
      </SideNav>
    ),
    noSandBox: true,
  },
  {
    description: 'Flat navigation.',
    jsx: (
      <SideNav>
        <SideNav.Item>Item 1</SideNav.Item>
        <SideNav.Item>Item 2</SideNav.Item>
        <SideNav.Item>Item 3</SideNav.Item>
      </SideNav>
    ),
    sandBoxWithNoPadding: true,
  },
  {
    description: 'Expandable navigation.',
    jsx: (
      <SideNav>
        <SideNav.Item>Flat item 1</SideNav.Item>
        <SideNav.Item>Flat item 2</SideNav.Item>
        <SideNav.Category label="Category 1">
          <SideNav.Item>Item 1</SideNav.Item>
          <SideNav.Item>Item 2</SideNav.Item>
          <SideNav.Item>Item 3</SideNav.Item>
        </SideNav.Category>
        <SideNav.Category label="Category 2">
          <SideNav.Item>Item 1</SideNav.Item>
          <SideNav.Item>Item 2</SideNav.Item>
          <SideNav.Item>Item 3</SideNav.Item>
        </SideNav.Category>
      </SideNav>
    ),
    sandBoxWithNoPadding: true,
  },
  {
    description: 'Expandable navigation in single expand mode.',
    jsx: (
      <SideNav expandMode="single">
        <SideNav.Category label="Category 1">
          <SideNav.Item>Item 1</SideNav.Item>
          <SideNav.Item>Item 2</SideNav.Item>
          <SideNav.Item>Item 3</SideNav.Item>
        </SideNav.Category>
        <SideNav.Category label="Category 2">
          <SideNav.Item>Item 1</SideNav.Item>
          <SideNav.Item>Item 2</SideNav.Item>
          <SideNav.Item>Item 3</SideNav.Item>
        </SideNav.Category>
      </SideNav>
    ),
    sandBoxWithNoPadding: true,
  },
]

export { SIDE_NAV_EXAMPLES_META }
