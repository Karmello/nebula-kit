import { ComponentMeta } from 'client/definitions'
import { Box, Button, Segment, Select, Toolbar, ToolbarProps } from 'lib/components'

const TOOLBAR_EXAMPLES_META: ComponentMeta<ToolbarProps>['examples'] = [
  {
    description: 'Basic render case for Toolbar.',
    jsx: (
      <Toolbar>
        <Toolbar.Start>Start</Toolbar.Start>
        <Toolbar.Main>Main</Toolbar.Main>
        <Toolbar.End>End</Toolbar.End>
      </Toolbar>
    ),
    noSandBox: true,
    skip: true,
  },
  {
    description:
      'Application header with a brand label on the left, navigation links in the main section that adapt responsively from column to row and an action menu on the right.',
    jsx: (
      <Toolbar switchAt="md">
        <Toolbar.Start>
          <Box paddingInline="20px">Brand</Box>
        </Toolbar.Start>
        <Toolbar.Main>
          <Segment flexDirection={{ base: 'column', md: 'row' }}>
            <Segment.Item>
              <Button fullWidth>Page 1</Button>
            </Segment.Item>
            <Segment.Item>
              <Button fullWidth>Page 2</Button>
            </Segment.Item>
          </Segment>
        </Toolbar.Main>
        <Toolbar.End>
          <Select staticLabel="Menu">
            <Select.Option value="option-1">Option 1</Select.Option>
            <Select.Option value="option-2">Option 2</Select.Option>
          </Select>
        </Toolbar.End>
      </Toolbar>
    ),
    sandBoxWithNoPadding: true,
  },
]

export { TOOLBAR_EXAMPLES_META }
