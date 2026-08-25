import type { Overview } from 'client/definitions'

export const SPLIT_VIEW_OVERVIEW: Overview = {
  bundle: 'pro',
  title: 'Two-panel layout for displaying side content alongside main content.',
  composedOf: ['Box'],
  features: [
    'provides dedicated side panel and main content regions',
    'switches the side panel between overlay and inline modes at the specified breakpoint (switchAt)',
    'automatically manages side panel visibility when switching between overlay and inline modes',
    'stretches to fill the full height of its parent container',
    'in overlay mode, blocks pointer interaction outside the active panel',
  ],
  guidelines: [
    'typically used for side navigation layouts, settings pages or documentation interfaces',
  ],
  exposedTags: ['div'],
  slots: ['SplitView.Side', 'SplitView.Main'],
}
