import { ComponentMeta } from 'client/definitions'
import { Box, Button, ButtonGroup, IconButton, Toolbar } from 'lib/components'
import { ToolbarOwnProps } from 'lib/components/layouts/Toolbar/definitions'

export default [
  {
    description:
      'An application header with a brand label on the left, navigation links in the main section that adapt responsively from column to row, and an action button on the right.',
    jsx: (
      <Toolbar switchAt="md">
        <Toolbar.Start>
          <Box paddingInline={10}>Brand</Box>
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
] as ComponentMeta<ToolbarOwnProps>['examples']
