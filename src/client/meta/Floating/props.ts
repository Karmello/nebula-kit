import { ComponentMeta } from 'client/definitions'
import { FloatingProps } from 'lib/components'
import { PORTAL_PLACEMENTS } from 'lib/components/core/utility/Portal'

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
  offset: {
    options: ['number'],
    description:
      'Defines the distance (px) between the anchor and floating content along the placement axis. Informational only - used for placement resolution, not rendering.',
  },
  onResolve: {
    options: ['({ placement, availableBlockSize, availableInlineSize, blockSize? }) => void'],
    isRequired: true,
    description:
      'Callback invoked when Floating resolves placement or layout constraints. Receives resolved placement and layout constraints.',
  },
  placement: {
    options: PORTAL_PLACEMENTS as never,
    description: 'Specifies the preferred placement of the floating content relative to the anchor.',
  },
  flipThresholdRatio: {
    options: ['0 - 1'],
    defaultValue: '0',
    description:
      'Controls how strongly Floating prefers the requested placement before flipping to the opposite side when the floating size is unknown. Higher values delay flipping and keep the overlay on the preferred side longer. Only applies in size-agnostic mode.',
  },
  floatingBlockSize: {
    options: ['number'],
    description:
      'Expected block size (px) of the floating content. When provided, Floating operates in size-aware mode and uses this value to improve placement, flipping and clamping decisions. Does not affect rendering.',
  },
  floatingInlineSize: {
    options: ['number'],
    description:
      'Expected inline size (px) of the floating content. When provided, Floating operates in size-aware mode and uses this value to improve alignment and overflow resolution. Does not affect rendering.',
  },
  viewportPadding: {
    options: ['number'],
    description:
      'Defines the minimum distance (px) from viewport edges used during placement resolution. Informational only - does not affect rendering.',
  },
}

export { FLOATING_PROPS_META }
