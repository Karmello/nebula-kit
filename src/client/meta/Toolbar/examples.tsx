import { ComponentMeta } from 'client/definitions'
import { Box, Button, Segment, Toolbar } from 'lib/components'
import { ToolbarProps } from 'lib/components/pro/layouts/Toolbar/definitions'

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
      'Application header with a brand label on the left, navigation links in the main section that adapt responsively from column to row and an action button on the right.',
    jsx: (
      <Toolbar switchAt="md">
        <Toolbar.Start>
          <Box intent="neutral" paddingInline={20}>
            Brand
          </Box>
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
          <Button iconName="chevron-down" />
        </Toolbar.End>
      </Toolbar>
    ),
    sandBoxWithNoPadding: true,
  },
]

export { TOOLBAR_EXAMPLES_META }
