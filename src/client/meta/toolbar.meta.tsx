import { ComponentMeta } from 'client/definitions'
import { Box, Button, ButtonGroup, IconButton, Toolbar } from 'lib/components'
import { TOOLBAR_INHERITED_PROPS, ToolbarOwnProps } from 'lib/components/layouts/Toolbar/definitions'
import { TOOLBAR_END_INHERITED_PROPS } from 'lib/components/layouts/Toolbar/slots/ToolbarEnd/definitions'
import { TOOLBAR_MAIN_INHERITED_PROPS } from 'lib/components/layouts/Toolbar/slots/ToolbarMain/definitions'
import { TOOLBAR_START_INHERITED_PROPS } from 'lib/components/layouts/Toolbar/slots/ToolbarStart/definitions'
import { DEFAULT_SWITCH_AT, SwitchAt } from 'lib/definitions'

const TOOLBAR_META: ComponentMeta<ToolbarOwnProps> = {
  overview: {
    description:
      'A horizontal bar with start, main, and end slots, designed to present different types of action items.',
    role: ['acts as a container for navigation and actions'],
    behavior: [
      'the main section is toggleable in collapsed mode and always visible in inline mode',
      'in collapsed mode, the toggle button is rendered to control the main section',
      'any Box inside the Toolbar is overridden to be square',
    ],
    byDefault: ['switchAt prop is set to lg'],
    examplesOfUse: [
      'often used inside an application header to control navigation and provide additional tools',
      'often paired with a ButtonGroup rendered inside the main section',
    ],
    composedOf: TOOLBAR_INHERITED_PROPS,
    rendersAs: ['nav'],
  },
  ownProps: [
    {
      name: 'switchAt',
      options: SwitchAt as unknown as string[],
      defaultValue: DEFAULT_SWITCH_AT,
      isRequired: false,
      isResponsive: false,
      description: 'Specifies the breakpoint at which the main section turns from collapsed to inline.',
    },
  ],
  examples: [
    {
      description:
        'An application header with a brand label on the left, navigation links in the main section that adapt responsively from column to row, and an action button on the right.',
      jsx: (
        <Toolbar switchAt="md">
          <Toolbar.Start>
            <Box paddingInline={10}>Brand</Box>
          </Toolbar.Start>
          <Toolbar.Main>
            <ButtonGroup
              attached
              direction={{ base: 'column', md: 'row' }}
              stretch={{ base: true, md: false }}
            >
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
  ],
}

const TOOLBAR_MAIN_META: ComponentMeta<unknown> = {
  overview: {
    title: 'Toolbar.Main',
    description: 'The main slot of the toolbar.',
    role: ['provides space for the primary content of the toolbar'],
    composedOf: TOOLBAR_MAIN_INHERITED_PROPS,
  },
}

const TOOLBAR_START_META: ComponentMeta<unknown> = {
  overview: {
    title: 'Toolbar.Start (optional)',
    description: 'The start slot of the toolbar.',
    role: ['provides a fixed region at the beginning of the toolbar layout'],
    behavior: ['always visible, even when the main section is collapsed and hidden'],
    examplesOfUse: [
      'showing a brand label or logo',
      'adding small auxiliary elements that sit next to the toggle button',
    ],
    composedOf: TOOLBAR_START_INHERITED_PROPS,
  },
}

const TOOLBAR_END_META: ComponentMeta<unknown> = {
  overview: {
    title: 'Toolbar.End (optional)',
    description: 'The end slot of the toolbar.',
    role: ['provides a fixed region at the end of the toolbar layout'],
    behavior: ['always visible, even when the main section is collapsed and hidden'],
    examplesOfUse: ['placing a user menu', 'showing a profile avatar', 'displaying notification icons'],
    composedOf: TOOLBAR_END_INHERITED_PROPS,
  },
}

export default {
  Toolbar: TOOLBAR_META,
  'Toolbar.Main': TOOLBAR_MAIN_META,
  'Toolbar.Start': TOOLBAR_START_META,
  'Toolbar.End': TOOLBAR_END_META,
}
