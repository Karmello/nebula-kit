import type { Overview } from 'client/definitions'

export const FLOATING_OVERVIEW: Overview = {
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
}
