import { PropCategory } from 'client/definitions'
import { SIDE_PANEL_LAYOUT_DEFAULT_SIDE_WITH_DESKTOP, SidePanelLayoutOwnProps } from 'lib/components'
import { ComponentMeta, HorizontalPosition } from 'lib/definitions'

const SIDE_PANEL_LAYOUT_META: ComponentMeta<SidePanelLayoutOwnProps> = {
  name: 'SidePanelLayout',
  description: '',
  props: [
    {
      category: PropCategory.alignment,
      name: 'sidePosition',
      options: [HorizontalPosition.left, HorizontalPosition.right],
      defaultValue: HorizontalPosition.left,
      isRequired: false,
      isResponsive: false,
      description: '',
    },
    {
      category: PropCategory.sizing,
      name: 'sideWidthDesktop',
      options: ['ScaleValue', 'CSS'],
      defaultValue: SIDE_PANEL_LAYOUT_DEFAULT_SIDE_WITH_DESKTOP,
      isRequired: false,
      isResponsive: false,
      description: '',
    },
    {
      category: PropCategory.other,
      name: 'children',
      options: ['ReactNode'],
      defaultValue: '',
      isRequired: true,
      isResponsive: false,
      description: '',
    },
  ],
}

export default SIDE_PANEL_LAYOUT_META
