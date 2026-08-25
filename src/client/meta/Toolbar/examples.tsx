import { Box, Button, Select } from 'lib/index.core'
import { Toolbar } from 'lib/index.pro'
import { type Example } from 'client/definitions'

export const TOOLBAR_EXAMPLES: Example[] = [
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
          <Box display="flex" flexDirection={{ base: 'column', md: 'row' }}>
            <Button fullWidth={{ base: true, md: false }}>Page 1</Button>
            <Button fullWidth={{ base: true, md: false }}>Page 2</Button>
          </Box>
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
