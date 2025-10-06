import { ComponentMeta } from 'client/definitions'
import { Box, Button, ButtonGroup, IconButton, Toolbar } from 'lib/components'
import { ToolbarProps } from 'lib/components/layouts/Toolbar/definitions'

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
  },
  {
    description:
      'An application header with a brand label on the left, navigation links in the main section that adapt responsively from column to row, and an action button on the right.',
    jsx: (
      <Toolbar switchAt="md">
        <Toolbar.Start>
          <Box intent="neutral" paddingInline={10}>
            Brand
          </Box>
        </Toolbar.Start>
        <Toolbar.Main>
          <ButtonGroup attached direction={{ base: 'column', md: 'row' }} stretch={{ base: true, md: false }}>
            <Button>Page 1</Button>
            <Button>Page 2</Button>
          </ButtonGroup>
        </Toolbar.Main>
        <Toolbar.End>
          <IconButton iconName="chevron-down" />
        </Toolbar.End>
      </Toolbar>
    ),
    sandBoxWithNoPadding: true,
  },
]

export { TOOLBAR_EXAMPLES_META }
