import { ComponentMeta } from 'client/definitions'
import { HorizontalPosition, DEFAULT_SIDE_PANEL_LAYOUT_SIDE_WITH_DESKTOP } from 'lib/definitions'

import {
  SIDE_PANEL_LAYOUT_INHERITED_PROPS,
  SidePanelLayout,
  SidePanelLayoutOwnProps,
  Text,
} from 'lib/components'

const SIDE_PANEL_LAYOUT_META: ComponentMeta<SidePanelLayoutOwnProps> = {
  overview: {
    description:
      'SidePanelLayout sets up a page structure where the main content and a complementary side panel live together in a flexible grid. It keeps both areas coordinated so the side section can stay aligned on larger screens while still adapting gracefully for smaller ones. This component is meant to handle the common "content + panel" pattern without you having to rebuild the layout logic every time.',
    composedOf: SIDE_PANEL_LAYOUT_INHERITED_PROPS,
  },
  props: [
    {
      name: 'sidePosition',
      options: [HorizontalPosition[0], HorizontalPosition[2]],
      defaultValue: HorizontalPosition[0],
      isRequired: false,
      isResponsive: false,
      description: '',
    },
    {
      name: 'sideWidthDesktop',
      options: ['ScaleValue', 'CSS'],
      defaultValue: DEFAULT_SIDE_PANEL_LAYOUT_SIDE_WITH_DESKTOP,
      isRequired: false,
      isResponsive: false,
      description: '',
    },
  ],
  examples: [
    {
      description: '...',
      jsx: (
        <SidePanelLayout>
          <SidePanelLayout.Main>
            <Text>Main</Text>
          </SidePanelLayout.Main>
          <SidePanelLayout.Header>
            <Text>Header</Text>
          </SidePanelLayout.Header>
          <SidePanelLayout.SideDesktop>
            <Text noWrap>Side desktop</Text>
          </SidePanelLayout.SideDesktop>
        </SidePanelLayout>
      ),
      sandBoxWithNoPadding: true,
    },
  ],
}

export default {
  SidePanelLayout: SIDE_PANEL_LAYOUT_META,
}
