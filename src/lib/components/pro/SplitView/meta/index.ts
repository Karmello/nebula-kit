import { BOX_META } from 'lib/components/core/Box/meta'
import { DEFAULT_SWITCH_BREAKPOINT, SWITCH_BREAKPOINTS } from 'lib/constants'
import { SplitViewProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { SPLIT_VIEW_SIDE_POSITIONS } from '../constants'
import { SPLIT_VIEW_CHANGELOG } from './changelog'
import { SPLIT_VIEW_EXAMPLES } from './examples'

export const SPLIT_VIEW_META = {
  hideExamplesThemeToggle: true,
  overview: {
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
  },
  props: {
    children: {
      ...BOX_META.Box.props.children,
      isRequired: true,
      options: ['SplitView.Side', 'SplitView.Main'],
      description:
        'Accepts slots directly or via a render function with access to the SplitView context.',
    },
    sidePosition: {
      options: SPLIT_VIEW_SIDE_POSITIONS as unknown as string[],
      defaultValue: SPLIT_VIEW_SIDE_POSITIONS[0],
      description: 'Controls which horizontal side the side panel is attached to.',
    },
    switchAt: {
      options: SWITCH_BREAKPOINTS,
      defaultValue: DEFAULT_SWITCH_BREAKPOINT,
      description:
        'Defines the breakpoint at which the side panel switches from overlay to inline layout mode.',
    },
    tagAttrs: BOX_META.Box.props.tagAttrs,
    tagRef: BOX_META.Box.props.tagRef,
  },
  examples: SPLIT_VIEW_EXAMPLES,
  changelog: SPLIT_VIEW_CHANGELOG,
} satisfies ComponentMeta<SplitViewProps>
