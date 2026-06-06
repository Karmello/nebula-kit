import { Box } from 'lib/components'
import { BOX_META } from 'lib/components/core/Box/meta'
import { PROP_GROUPS } from 'lib/constants'
import { Floating } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { DEFAULT_FLOATING_MODE, DEFAULT_FLOATING_PLACEMENT, FLOATING_MODE, FLOATING_PLACEMENT } from './constants'
import { FloatingContentProps, FloatingTriggerProps } from './slots'
import { DEFAULT_FLOATING_TRIGGER_DISPLAY, FLOATING_TRIGGER_DISPLAY } from './slots/FloatingTrigger/constants'
import { FloatingProps } from './types'

export const FLOATING_META = {
  Floating: {
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
      placement: {
        group: PROP_GROUPS.FLOATING,
        options: FLOATING_PLACEMENT,
        defaultValue: DEFAULT_FLOATING_PLACEMENT,
        description: 'Defines the preferred position of the floating content relative to the trigger.',
      },
      offset: {
        group: PROP_GROUPS.FLOATING,
        options: ['number'],
        description: 'Sets the distance between the trigger and floating content.',
      },
      mode: {
        group: PROP_GROUPS.INTERACTION,
        options: FLOATING_MODE,
        defaultValue: DEFAULT_FLOATING_MODE,
        description: 'Defines which interaction opens the floating content.',
      },
      disabled: {
        group: PROP_GROUPS.INTERACTION,
        options: ['boolean'],
        description:
          'Disables the floating interaction, preventing the floating content from opening through trigger hover or click behavior.',
      },
      onPlacementChange: {
        group: PROP_GROUPS.FLOATING,
        options: ['placement => void'],
        description: 'Callback fired when the resolved placement changes.',
      },
      children: {
        group: PROP_GROUPS.ROOT,
        options: ['ReactNode'],
        isRequired: true,
        description: 'Floating.Trigger + Floating.Content slots.',
      },
      open: {
        group: PROP_GROUPS.ROOT,
        options: ['boolean'],
        description: 'Controls whether the floating content is currently visible.',
      },
      onOpenChange: {
        group: PROP_GROUPS.ROOT,
        options: ['(open: boolean) => void'],
        description: 'Callback fired when the floating content requests to open or close.',
      },
    },
    examples: [
      {
        jsx: (
          <Floating offset={10}>
            <Floating.Trigger>
              <Box drawable variant="solid" intent="primary" padding="sm">
                Trigger
              </Box>
            </Floating.Trigger>
            <Floating.Content>
              <Box drawable variant="solid" intent="primary" padding="sm">
                Content
              </Box>
            </Floating.Content>
          </Floating>
        ),
      },
    ],
    changelog: {
      '0.11.0': ['released'],
    },
  } satisfies ComponentMeta<FloatingProps>,
  FloatingTrigger: {
    overview: {
      bundle: 'pro',
      name: 'Floating.Trigger',
      title: 'Anchor element used to position and control the floating content.',
      description:
        'Floating.Trigger wraps the element that opens the floating layer and acts as the positioning reference for Floating.Content.',
      features: [
        'provides the reference element used by Floating UI',
        'preserves the rendered child structure without applying visual styling',
      ],
      composedOf: ['Box'],
      topLevelTags: ['span'],
    },
    props: {
      cursor: BOX_META.Box.props.cursor,
      display: {
        ...BOX_META.Box.props.display,
        options: FLOATING_TRIGGER_DISPLAY,
        defaultValue: DEFAULT_FLOATING_TRIGGER_DISPLAY,
        isResponsive: false,
      },
      children: {
        group: PROP_GROUPS.ROOT,
        options: ['ReactNode'],
        isRequired: true,
        description: 'Element used to trigger and position the floating content.',
      },
    },
  } satisfies ComponentMeta<FloatingTriggerProps>,
  FloatingContent: {
    overview: {
      bundle: 'pro',
      name: 'Floating.Content',
      title: 'Portal-rendered overlay positioned relative to the trigger.',
      description:
        'Floating.Content wraps the floating layer, renders it in a portal and applies the positioning, dismissal and opening animation behavior managed by Floating.',
      features: ['renders only while the floating layer is open', 'closes on outside press, Escape and Tab navigation'],
      composedOf: ['Box'],
      topLevelTags: ['span'],
    },
    props: {
      children: {
        group: PROP_GROUPS.ROOT,
        options: ['ReactNode'],
        isRequired: true,
        description: 'Content displayed when the floating layer is open.',
      },
    },
  } satisfies ComponentMeta<FloatingContentProps>,
}
