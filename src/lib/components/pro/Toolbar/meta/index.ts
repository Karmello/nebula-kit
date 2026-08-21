import { GRID_META } from 'lib/components/core/Grid/meta'
import { DEFAULT_SWITCH_BREAKPOINT, SWITCH_BREAKPOINTS } from 'lib/constants'
import { ToolbarEndProps, ToolbarMainProps, ToolbarProps, ToolbarStartProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { TOOLBAR_CHANGELOG } from './changelog'
import { TOOLBAR_EXAMPLES } from './examples'

export const TOOLBAR_META = {
  Toolbar: {
    overview: {
      bundle: 'pro',
      title: 'Horizontal bar with Start, Main and End slots for organizing actions and controls.',
      features: [
        'the main section is toggleable in collapsed mode and always visible in inline mode',
        'all drawable Box components inside Toolbar are forced to use square corners',
      ],
      guidelines: [
        'often used inside AppFrame.Header to control navigation and provide additional tools',
        'often paired with ButtonGroup rendered inside the main section',
      ],
      composedOf: ['Grid'],
      exposedTags: ['nav'],
      slots: ['Toolbar.Main', 'Toolbar.Start', 'Toolbar.End'],
    },
    props: {
      children: {
        ...GRID_META.Grid.props.children,
        isRequired: true,
        options: ['Toolbar.Start', 'Toolbar.Main', 'Toolbar.End'],
        description:
          'Accepts slots directly or via a render function with access to the context argument.',
      },
      switchAt: {
        options: SWITCH_BREAKPOINTS,
        defaultValue: DEFAULT_SWITCH_BREAKPOINT,
        isRequired: false,
        isResponsive: false,
        description:
          'Defines the breakpoint at which the main section switches between collapsed and inline layout.',
      },
      tagAttrs: GRID_META.Grid.props.tagAttrs,
      tagRef: GRID_META.Grid.props.tagRef,
    },
    examples: TOOLBAR_EXAMPLES,
    changelog: TOOLBAR_CHANGELOG,
  } satisfies ComponentMeta<ToolbarProps>,
  ToolbarMain: {
    overview: {
      bundle: 'pro',
      name: 'Toolbar.Main',
      title: 'Defines the main slot of Toolbar.',
      features: ['holds the primary, collapsible content of the toolbar'],
      composedOf: ['Grid.Item'],
    },
    props: {
      children: {
        ...GRID_META.GridItem.props.children,
        isRequired: true,
      },
      tagAttrs: GRID_META.GridItem.props.tagAttrs,
      tagRef: GRID_META.GridItem.props.tagRef,
    },
  } satisfies ComponentMeta<ToolbarMainProps>,
  ToolbarStart: {
    overview: {
      bundle: 'pro',
      name: 'Toolbar.Start?',
      title: 'Defines the start slot of Toolbar.',
      features: [
        'fixed region at the start of the toolbar',
        'remains visible when the main section is collapsed',
      ],
      guidelines: ['commonly used for brand, logo or home button'],
      composedOf: ['Grid.Item'],
    },
    props: {
      children: {
        ...GRID_META.GridItem.props.children,
        isRequired: true,
      },
      tagAttrs: GRID_META.GridItem.props.tagAttrs,
      tagRef: GRID_META.GridItem.props.tagRef,
    },
  } satisfies ComponentMeta<ToolbarStartProps>,
  ToolbarEnd: {
    overview: {
      bundle: 'pro',
      name: 'Toolbar.End?',
      title: 'Defines the end slot of Toolbar.',
      features: [
        'fixed region at the end of the toolbar',
        'remains visible when the main section is collapsed',
      ],
      guidelines: ['commonly used for user actions, menus or status items'],
      composedOf: ['Grid.Item'],
    },
    props: {
      children: {
        ...GRID_META.GridItem.props.children,
        isRequired: true,
      },
      tagAttrs: GRID_META.GridItem.props.tagAttrs,
      tagRef: GRID_META.GridItem.props.tagRef,
    },
  } satisfies ComponentMeta<ToolbarEndProps>,
}
