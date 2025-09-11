import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_SIDE_PANEL_LAYOUT_SWITCH_AT,
  HorizontalPosition,
  SidePanelLayoutSwitchAt,
} from 'lib/definitions'

import {
  Box,
  SIDE_PANEL_LAYOUT_INHERITED_PROPS,
  SidePanelLayout,
  SidePanelLayoutOwnProps,
  Text,
} from 'lib/components'

import {
  SIDE_PANEL_LAYOUT_SIDE_INHERITED_PROPS,
  SIDE_PANEL_LAYOUT_MAIN_INHERITED_PROPS,
  SIDE_PANEL_LAYOUT_MAIN_BAR_INHERITED_PROPS,
} from 'lib/components/layouts/SidePanelLayout/slots'

const SIDE_PANEL_LAYOUT_META: ComponentMeta<SidePanelLayoutOwnProps> = {
  overview: {
    description: 'A two-panel layout designed for building side navigation alongside main content.',
    composedOf: SIDE_PANEL_LAYOUT_INHERITED_PROPS,
    role: [
      'provides a two-panel horizontal layout with a main content area and side panel',
      'manages side panel visibility',
    ],
    behavior: [
      'positions the side panel on the left or right edge',
      'switches between overlay and inline modes at a breakpoint',
    ],
    byDefault: [
      'stretches to fill the full height of its parent container',
      'shows the side panel in inline mode',
      'hides the side panel in overlay mode',
    ],
    examplesOfUse: [
      'creating a layout with a collapsible navigation sidebar',
      'displaying filters or tools alongside main content',
      'building dashboards where the side panel supplements the primary view',
    ],
  },
  props: [
    {
      name: 'sidePosition',
      options: [HorizontalPosition[0], HorizontalPosition[2]],
      defaultValue: HorizontalPosition[0],
      isRequired: false,
      isResponsive: false,
      description: 'Controls which horizontal side of the layout the panel is attached to.',
    },
    {
      name: 'switchAt',
      options: SidePanelLayoutSwitchAt as unknown as string[],
      defaultValue: DEFAULT_SIDE_PANEL_LAYOUT_SWITCH_AT,
      isRequired: false,
      isResponsive: false,
      description:
        'Defines the breakpoint at which the side panel changes its behavior from overlaying the content to sitting inline within the layout.',
    },
  ],
  examples: [
    {
      description:
        "Demonstrates SidePanelLayout filling its parent's height, with a side panel, a main content area, and an optional MainBar above the main content.",
      jsx: (
        <Box blockSize="500px">
          <SidePanelLayout>
            <SidePanelLayout.Main>
              <Text>Main</Text>
            </SidePanelLayout.Main>
            <SidePanelLayout.MainBar>
              <Text>MainBar</Text>
            </SidePanelLayout.MainBar>
            <SidePanelLayout.Side intent="secondary">
              <Text noWrap>Side</Text>
            </SidePanelLayout.Side>
          </SidePanelLayout>
        </Box>
      ),
      sandBoxWithNoPadding: true,
    },
  ],
}

const SIDE_PANEL_LAYOUT_SIDE_META: ComponentMeta<any> = {
  overview: {
    title: 'SidePanelLayout.Side',
    description: 'The side panel region of the layout.',
    composedOf: SIDE_PANEL_LAYOUT_SIDE_INHERITED_PROPS,
  },
}

const SIDE_PANEL_LAYOUT_MAIN_META: ComponentMeta<any> = {
  overview: {
    title: 'SidePanelLayout.Main',
    description: 'The main panel region of the layout.',
    composedOf: SIDE_PANEL_LAYOUT_MAIN_INHERITED_PROPS,
  },
}

const SIDE_PANEL_LAYOUT_MAIN_BAR_META: ComponentMeta<any> = {
  overview: {
    title: 'SidePanelLayout.MainBar',
    description: 'Optional horizontal slot above main content.',
    composedOf: SIDE_PANEL_LAYOUT_MAIN_BAR_INHERITED_PROPS,
  },
}

export default {
  SidePanelLayout: SIDE_PANEL_LAYOUT_META,
  SidePanelLayoutSide: SIDE_PANEL_LAYOUT_SIDE_META,
  SidePanelLayoutMain: SIDE_PANEL_LAYOUT_MAIN_META,
  SidePanelLayoutMainBar: SIDE_PANEL_LAYOUT_MAIN_BAR_META,
}
