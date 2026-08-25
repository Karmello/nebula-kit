import {
  DEFAULT_FLOATING_MODE,
  DEFAULT_FLOATING_PLACEMENT,
  FLOATING_MODE,
  FLOATING_PLACEMENT,
} from 'lib/components/pro/Floating/constants'
import { FloatingProps } from 'lib/components/pro/Floating/types'
import { ComponentMeta } from 'client/definitions'

import { FLOATING_CHANGELOG } from './changelog'
import { FLOATING_EXAMPLES } from './examples'

export const FLOATING_META = {
  overview: {
    bundle: 'pro',
    title: 'Anchored overlay primitive for positioning content relative to a trigger element.',
    description:
      'Floating provides the foundation for building overlays that appear relative to another element. It manages positioning, portal rendering, viewport collision handling and interaction modes while leaving the rendered content completely up to the consumer. Floating is intentionally unopinionated. It does not provide menu items, selection logic, keyboard navigation, styling or layout. Instead, it serves as a composable primitive that higher-level components such as Select, MultiSelect, Autocomplete, Tooltip and custom overlays can build upon.',
    features: [
      'positions content relative to a trigger element',
      'supports click and hover interaction modes',
      'automatically flips and shifts content to remain visible within the viewport',
      'renders floating content through a portal',
      'handles outside-click and escape-key dismissal',
      'accepts arbitrary content with no assumptions about structure or styling',
      'supports configurable placement and offset',
      'provides a foundation for building custom overlays and floating interfaces',
    ],
    slots: ['Floating.Trigger', 'Floating.Content'],
  },
  props: {
    children: {
      options: ['ReactNode'],
      isRequired: true,
      description: 'Floating.Trigger + Floating.Content slots.',
    },
    disabled: {
      options: ['boolean'],
      description:
        'Disables the floating interaction, preventing the floating content from opening through trigger hover or click behavior.',
    },
    mode: {
      options: FLOATING_MODE,
      defaultValue: DEFAULT_FLOATING_MODE,
      description: 'Defines which interaction opens the floating content.',
    },
    offset: {
      options: ['number'],
      description: 'Sets the distance between the trigger and floating content.',
    },
    onOpenChange: {
      options: ['(open: boolean) => void'],
      description: 'Callback fired when the floating content requests to open or close.',
    },
    onPlacementChange: {
      options: ['placement => void'],
      description: 'Callback fired when the resolved placement changes.',
    },
    open: {
      options: ['boolean'],
      description: 'Controls whether the floating content is currently visible.',
    },
    placement: {
      options: FLOATING_PLACEMENT,
      defaultValue: DEFAULT_FLOATING_PLACEMENT,
      description:
        'Defines the preferred position of the floating content relative to the trigger.',
    },
  },
  examples: FLOATING_EXAMPLES,
  changelog: FLOATING_CHANGELOG,
} satisfies ComponentMeta<FloatingProps>
