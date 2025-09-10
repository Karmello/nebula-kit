import { SIDE_PANEL_LAYOUT_DEFAULT_SIDE_WITH_DESKTOP, SidePanelLayoutOwnProps } from 'lib/components'
import { ComponentMeta, HorizontalPosition } from 'lib/definitions'

const SIDE_PANEL_LAYOUT_META: ComponentMeta<SidePanelLayoutOwnProps> = {
  overview: {
    name: 'SidePanelLayout',
    description:
      'SidePanelLayout sets up a page structure where the main content and a complementary side panel live together in a flexible grid. It keeps both areas coordinated so the side section can stay aligned on larger screens while still adapting gracefully for smaller ones. This component is meant to handle the common "content + panel" pattern without you having to rebuild the layout logic every time.',
    propsDescription: '',
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
      defaultValue: SIDE_PANEL_LAYOUT_DEFAULT_SIDE_WITH_DESKTOP,
      isRequired: false,
      isResponsive: false,
      description: '',
    },
    {
      name: 'children',
      options: ['ReactNode'],
      isRequired: true,
      isResponsive: false,
      description: '',
    },
  ],
}

export default SIDE_PANEL_LAYOUT_META
