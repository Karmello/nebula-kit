import { PROP_GROUPS } from 'lib/constants'
import { Floating } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { DEFAULT_FLOATING_MODE, DEFAULT_FLOATING_PLACEMENT, FLOATING_MODE, FLOATING_PLACEMENT } from './constants'
import { FloatingContentProps, FloatingTriggerProps } from './slots'
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
      composedOf: ['HtmlTag'],
      topLevelTags: ['span'],
      slots: ['Floating.Trigger', 'Floating.Content'],
    },
    props: {
      mode: {
        group: PROP_GROUPS.FLOATING,
        options: FLOATING_MODE,
        defaultValue: DEFAULT_FLOATING_MODE,
        description: 'Defines which interaction opens the floating content.',
      },
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
      open: {
        group: PROP_GROUPS.FLOATING,
        options: ['boolean'],
        description: 'Controls whether the floating content is currently visible.',
      },
      onOpenChange: {
        group: PROP_GROUPS.FLOATING,
        options: ['(open: boolean) => void'],
        description: 'Callback fired when the floating content requests to open or close.',
      },
      children: {
        group: PROP_GROUPS.ROOT,
        options: ['ReactNode'],
        isRequired: true,
        description: 'Floating.Trigger + Floating.Content slots.',
      },
    },
    examples: [
      {
        jsx: (
          <Floating>
            <Floating.Trigger>trigger</Floating.Trigger>
            <Floating.Content>content</Floating.Content>
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
      title: '...',
      description: '...',
    },
    props: {
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
      title: '...',
      description: '...',
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
