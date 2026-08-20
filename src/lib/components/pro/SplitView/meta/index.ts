import { BOX_META } from 'lib/components/core/Box/meta'
import { GRID_META } from 'lib/components/core/Grid/meta'
import { DEFAULT_SWITCH_BREAKPOINT, SWITCH_BREAKPOINTS } from 'lib/constants'
import { SplitViewMainBarProps, SplitViewMainProps, SplitViewProps, SplitViewSideProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { SPLIT_VIEW_SIDE_POSITIONS } from '../definitions'
import { DEFAULT_SPLIT_VIEW_SIDE_BLOCK_SIZE, DEFAULT_SPLIT_VIEW_SIDE_INLINE_SIZE, DEFAULT_SPLIT_VIEW_SIDE_INTENT } from '../slots'
import { SPLIT_VIEW_CHANGELOG } from './changelog'
import { SPLIT_VIEW_EXAMPLES } from './examples'

export const SPLIT_VIEW_META = {
  SplitView: {
    hideExamplesThemeToggle: true,
    overview: {
      bundle: 'pro',
      title: 'Two-panel layout for displaying side content alongside main content.',
      composedOf: ['Grid'],
      features: [
        'provides dedicated side panel and main content regions',
        'switches the side panel between overlay and inline modes at the specified breakpoint (switchAt)',
        'automatically manages side panel visibility when switching between overlay and inline modes',
        'stretches to fill the full height of its parent container',
        'in overlay mode, blocks pointer interaction outside the active panel',
      ],
      guidelines: ['typically used for side navigation layouts, settings pages or documentation interfaces'],
      exposedTags: ['div'],
      slots: ['SplitView.Side', 'SplitView.Main'],
    },
    props: {
      sidePosition: {
        options: SPLIT_VIEW_SIDE_POSITIONS as unknown as string[],
        defaultValue: SPLIT_VIEW_SIDE_POSITIONS[0],
        description: 'Controls which horizontal side the side panel is attached to.',
      },
      switchAt: {
        options: SWITCH_BREAKPOINTS,
        defaultValue: DEFAULT_SWITCH_BREAKPOINT,
        description: 'Defines the breakpoint at which the side panel switches from overlay to inline layout mode.',
      },
      children: {
        ...GRID_META.Grid.props.children,
        isRequired: true,
        options: ['SplitView.Side', 'SplitView.Main'],
        description: 'Accepts slots directly or via a render function with access to the SplitView context.',
      },
      tagRef: GRID_META.Grid.props.tagRef,
      tagAttrs: GRID_META.Grid.props.tagAttrs,
    },
    examples: SPLIT_VIEW_EXAMPLES,
    changelog: SPLIT_VIEW_CHANGELOG,
  } satisfies ComponentMeta<SplitViewProps>,
  SplitViewSide: {
    overview: {
      bundle: 'pro',
      name: 'SplitView.Side',
      title: 'Defines the side panel region of the SplitView layout.',
      features: [
        'traps keyboard focus when the side panel is rendered in overlay mode',
        'automatically renders a close action when displayed in overlay mode',
      ],
      guidelines: ['typically used for navigation, menus or supplementary content'],
      composedOf: ['Box', 'Flex', 'IconButton', 'Resize', 'FocusTrap'],
      exposedTags: ['aside'],
    },
    props: {
      color: {
        ...BOX_META.Box.props.color,
        isResponsive: false,
      },
      intent: {
        ...BOX_META.Box.props.intent,
        defaultValue: String(DEFAULT_SPLIT_VIEW_SIDE_INTENT),
        isResponsive: false,
      },
      inlineSize: {
        ...BOX_META.Box.props.inlineSize,
        defaultValue: String(DEFAULT_SPLIT_VIEW_SIDE_INLINE_SIZE),
      },
      blockSize: {
        ...BOX_META.Box.props.blockSize,
        defaultValue: String(DEFAULT_SPLIT_VIEW_SIDE_BLOCK_SIZE),
      },
      padding: BOX_META.Box.props.padding,
      paddingInline: BOX_META.Box.props.paddingInline,
      paddingBlock: BOX_META.Box.props.paddingBlock,
      paddingTop: BOX_META.Box.props.paddingTop,
      paddingRight: BOX_META.Box.props.paddingRight,
      paddingBottom: BOX_META.Box.props.paddingBottom,
      paddingLeft: BOX_META.Box.props.paddingLeft,
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      tagRef: BOX_META.Box.props.tagRef,
      tagAttrs: BOX_META.Box.props.tagAttrs,
    },
  } satisfies ComponentMeta<SplitViewSideProps>,
  SplitViewMain: {
    overview: {
      bundle: 'pro',
      name: 'SplitView.Main',
      title: 'Defines the main content region of the SplitView layout.',
      features: ['holds the primary content region of the SplitView layout'],
      composedOf: ['Box', 'Flex', 'IconButton', 'Spacer'],
      exposedTags: ['section'],
      slots: ['SplitView.MainBar'],
    },
    props: {
      padding: BOX_META.Box.props.padding,
      paddingInline: BOX_META.Box.props.paddingInline,
      paddingBlock: BOX_META.Box.props.paddingBlock,
      paddingTop: BOX_META.Box.props.paddingTop,
      paddingRight: BOX_META.Box.props.paddingRight,
      paddingBottom: BOX_META.Box.props.paddingBottom,
      paddingLeft: BOX_META.Box.props.paddingLeft,
      children: {
        ...BOX_META.Box.props.children,
        options: ['ReactNode', 'SplitView.MainBar'],
        isRequired: true,
        description: 'Main slot content plus optional MainBar slot.',
      },
      tagRef: BOX_META.Box.props.tagRef,
      tagAttrs: BOX_META.Box.props.tagAttrs,
    },
  } satisfies ComponentMeta<SplitViewMainProps>,
  SplitViewMainBar: {
    overview: {
      bundle: 'pro',
      name: 'SplitView.MainBar?',
      title: 'Defines the horizontal region displayed above the main content',
      features: ['can contain any custom content, such as breadcrumbs or other controls'],
      guidelines: ['should be placed inside SplitView.Main slot'],
      composedOf: ['Box'],
      exposedTags: ['div'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      tagRef: BOX_META.Box.props.tagRef,
      tagAttrs: BOX_META.Box.props.tagAttrs,
    },
  } satisfies ComponentMeta<SplitViewMainBarProps>,
}
