import { ComponentMeta } from 'client/definitions'
import { FloatingProps } from 'lib/components'
import { PORTAL_PLACEMENTS } from 'lib/components/core/utility/Portal'
import { FLOATING_MODE } from 'lib/components/pro/overlays/Floating'

const FLOATING_PROPS_META: ComponentMeta<FloatingProps>['props'] = {
  anchorRef: {
    options: ['RefObject'],
    isRequired: true,
    description: 'Reference to an element the floating logic resolves placement relative to.',
  },
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description:
      'Rendered floating content. Floating does not render any DOM of its own and only provides placement resolution for its children.',
  },
  maxInlineSize: {
    options: ['number'],
    description: 'Maximum inline size in pixels. Required when using the project strategy to resolve placement.',
  },
  minInlineSize: {
    options: ['number'],
    description: 'Minimum inline size in pixels. Required when using the project strategy to resolve placement.',
  },
  mode: {
    options: FLOATING_MODE,
    isRequired: true,
    description:
      'Defines the floating behavior and allowed axis. Combines positioning strategy (project or fit) with the axis constraint (x, y, or both) into a single required setting that determines how placement is resolved.',
    tooltip: FLOATING_MODE,
  },
  offset: {
    options: ['number'],
    description:
      'Offset in pixels applied during placement calculations to add space between the floating element and its anchor.',
  },
  onResolve: {
    options: ['({ placement, blockSize? }) => void'],
    description:
      "Callback invoked when the floating element's placement is resolved. Receives the resolved placement and when applicable, the resolved block size.",
    tooltip: ['({ placement, blockSize? }) => void'],
  },
  placement: {
    options: PORTAL_PLACEMENTS,
    description:
      'Preferred initial placement of the floating element. Acts as a hint and may be overridden during resolution depending on mode and available space.',
    tooltip: PORTAL_PLACEMENTS,
  },
  floatingBlockSize: {
    options: ['number'],
    description: 'Block size of the floating element in pixels. Required when using the fit strategy to resolve placement.',
  },
  viewportPadding: {
    options: ['number'],
    description:
      'Padding in pixels applied to viewport bounds during placement calculations, used to keep the resolved position away from the viewport edges.',
  },
}

export { FLOATING_PROPS_META }
