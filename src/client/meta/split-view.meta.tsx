import { ComponentMeta } from 'client/definitions'
import { Box, SPLIT_VIEW_INHERITED_PROPS, SplitView, SplitViewOwnProps, Text } from 'lib/components'

import {
  DEFAULT_SPLIT_VIEW_SIDE_WIDTH,
  DEFAULT_SWITCH_AT,
  HorizontalPosition,
  SwitchAt,
} from 'lib/definitions'

import {
  SPLIT_VIEW_MAIN_BAR_INHERITED_PROPS,
  SPLIT_VIEW_MAIN_INHERITED_PROPS,
  SPLIT_VIEW_SIDE_INHERITED_PROPS,
} from 'lib/components/layouts/SplitView/slots'

const SPLIT_VIEW_META: ComponentMeta<SplitViewOwnProps> = {
  overview: {
    description: 'A two-panel layout designed for building side navigation alongside main content.',
    composedOf: SPLIT_VIEW_INHERITED_PROPS,
    role: [
      'provides a two-panel horizontal layout with a main content area and side panel',
      'manages side panel visibility',
    ],
    behavior: [
      'stretches to fill the full height of its parent container',
      'shows the side panel in inline mode',
      'hides the side panel in overlay mode',
      'changes the side panel from an overlay to an inline layout at a breakpoint (switchAt prop)',
    ],
    byDefault: ['sidePosition is set to left', 'switchAt prop is set to lg'],
    examplesOfUse: [
      'creating a layout with a collapsible navigation sidebar',
      'displaying filters or tools alongside main content',
      'building dashboards where the side panel supplements the primary view',
    ],
  },
  ownProps: [
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
      options: SwitchAt as unknown as string[],
      defaultValue: DEFAULT_SWITCH_AT,
      isRequired: false,
      isResponsive: false,
      description:
        'Defines the breakpoint at which the side panel changes its behavior from overlaying the content to sitting inline within the layout.',
    },
  ],
  examples: [
    {
      description:
        "Demonstrates SplitView filling its parent's height, with a side panel, a main content area, and an optional MainBar above the main content. Resize the viewport to a smaller width to see the side panel switch to its overlay version.",
      jsx: (
        <Box blockSize="500px">
          <SplitView>
            <SplitView.Side intent="secondary" inlineSize={{ base: '300px', md: '500px', lg: '150px' }}>
              <Box margin={5}>
                <Text noWrap>Side</Text>
              </Box>
            </SplitView.Side>
            <SplitView.Main padding={5}>
              <Text>Main</Text>
            </SplitView.Main>
            <SplitView.MainBar>
              <Text>MainBar</Text>
            </SplitView.MainBar>
          </SplitView>
        </Box>
      ),
      sandBoxWithNoPadding: true,
    },
  ],
}

const SPLIT_VIEW_SIDE_META: ComponentMeta<any> = {
  overview: {
    title: 'SplitView.Side',
    description: 'The side panel region of the layout.',
    composedOf: SPLIT_VIEW_SIDE_INHERITED_PROPS,
    behavior: ['renders as <aside> element'],
    byDefault: [`sets inlineSize to ${DEFAULT_SPLIT_VIEW_SIDE_WIDTH}`],
  },
}

const SPLIT_VIEW_MAIN_META: ComponentMeta<any> = {
  overview: {
    title: 'SplitView.Main',
    description: 'The main panel region of the layout.',
    composedOf: SPLIT_VIEW_MAIN_INHERITED_PROPS,
    behavior: ['renders as <section> element'],
    byDefault: ['no padding applied'],
  },
}

const SPLIT_VIEW_MAIN_BAR_META: ComponentMeta<any> = {
  overview: {
    title: 'SplitView.MainBar (optional)',
    description: 'Optional horizontal slot above main content.',
    byDefault: ['renders as <div> element'],
    composedOf: SPLIT_VIEW_MAIN_BAR_INHERITED_PROPS,
  },
}

export default {
  SplitView: SPLIT_VIEW_META,
  SplitViewSide: SPLIT_VIEW_SIDE_META,
  SplitViewMain: SPLIT_VIEW_MAIN_META,
  SplitViewMainBar: SPLIT_VIEW_MAIN_BAR_META,
}
