import { BOX_META } from 'lib/components/core/Box/meta'
import { GRID_META } from 'lib/components/core/Grid/meta'
import { DEFAULT_SWITCH_BREAKPOINT, PROP_GROUPS, SWITCH_BREAKPOINTS } from 'lib/constants'
import { Box, Text } from 'lib/index.core'
import { SplitView, SplitViewMainBarProps, SplitViewMainProps, SplitViewProps, SplitViewSideProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { SPLIT_VIEW_SIDE_POSITIONS } from './definitions'
import { DEFAULT_SPLIT_VIEW_SIDE_BLOCK_SIZE, DEFAULT_SPLIT_VIEW_SIDE_INLINE_SIZE, DEFAULT_SPLIT_VIEW_SIDE_INTENT } from './slots'

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
      topLevelTags: ['div'],
      slots: ['SplitView.Side', 'SplitView.Main'],
    },
    props: {
      children: {
        ...GRID_META.Grid.props.children,
        isRequired: true,
        options: ['SplitView.Side', 'SplitView.Main'],
        description: 'Accepts slots directly or via a render function with access to the SplitView context.',
      },
      tagRef: GRID_META.Grid.props.tagRef,
      tagAttrs: GRID_META.Grid.props.tagAttrs,
      sidePosition: {
        group: PROP_GROUPS.LAYOUT,
        options: SPLIT_VIEW_SIDE_POSITIONS as unknown as string[],
        defaultValue: SPLIT_VIEW_SIDE_POSITIONS[0],
        description: 'Controls which horizontal side the side panel is attached to.',
      },
      switchAt: {
        group: PROP_GROUPS.LAYOUT,
        options: SWITCH_BREAKPOINTS,
        defaultValue: DEFAULT_SWITCH_BREAKPOINT,
        description: 'Defines the breakpoint at which the side panel switches from overlay to inline layout mode.',
      },
    },
    examples: [
      {
        description: 'Basic render case for SplitView.',
        jsx: (
          <SplitView>
            <SplitView.Side>Side</SplitView.Side>
            <SplitView.Main>
              <SplitView.MainBar>MainBar</SplitView.MainBar>
              Main
            </SplitView.Main>
          </SplitView>
        ),
        noSandBox: true,
        skip: true,
      },
      {
        description:
          "SplitView with side panel, main content area and MainBar above the main content. It fills its parent's height. Resize the viewport to a smaller width to see the side panel switch to its overlay version.",
        jsx: (
          <Box blockSize="500px">
            <SplitView>
              <SplitView.Side inlineSize={{ base: '300px', md: '500px', lg: '150px' }}>
                <Box margin="xs">
                  <Text noWrap>Side</Text>
                </Box>
              </SplitView.Side>
              <SplitView.Main padding="10px">
                <SplitView.MainBar>
                  <Text>MainBar</Text>
                </SplitView.MainBar>
                <Text>Main</Text>
              </SplitView.Main>
            </SplitView>
          </Box>
        ),
        sandBoxWithNoPadding: true,
      },
      {
        description: 'Using render function to access SplitView context and control its open state in overlay mode.',
        code: `
<SplitView>
  {({ setSideOpen, mode }) => (
    <>
      <SplitView.Side>
        <Button
          tagAttrs={{
            onClick: () => {
              // auto-close side panel on button click
              if (mode === 'overlay') {
                await setSideOpen(false)
              }
              // navigate to different route when animation done
              ...
            },
          }}
        >
          Menu button
        </Button>
      </SplitView.Side>
      <SplitView.Main>
        <SplitView.MainBar>MainBar</SplitView.MainBar>
        Main
      </SplitView.Main>
    </>
  )}
</SplitView>`,
        noSandBox: true,
      },
    ],
    changelog: {
      '0.11.0': ['exposed `blockSize` prop on SplitView.Side slot'],
      '0.10.0': ['exposed all `padding` props on SplitView.Side slot'],
      '0.8.0': ['removed `borderIntent` prop'],
      '0.2.3': ['released'],
    },
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
      topLevelTags: ['aside'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      tagRef: BOX_META.Box.props.tagRef,
      tagAttrs: BOX_META.Box.props.tagAttrs,
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
    },
  } satisfies ComponentMeta<SplitViewSideProps>,
  SplitViewMain: {
    overview: {
      bundle: 'pro',
      name: 'SplitView.Main',
      title: 'Defines the main content region of the SplitView layout.',
      features: ['holds the primary content region of the SplitView layout'],
      composedOf: ['Box', 'Flex', 'IconButton', 'Spacer'],
      topLevelTags: ['section'],
      slots: ['SplitView.MainBar'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        options: ['ReactNode', 'SplitView.MainBar'],
        isRequired: true,
        description: 'Main slot content plus optional MainBar slot.',
      },
      tagRef: BOX_META.Box.props.tagRef,
      tagAttrs: BOX_META.Box.props.tagAttrs,
      padding: BOX_META.Box.props.padding,
      paddingInline: BOX_META.Box.props.paddingInline,
      paddingBlock: BOX_META.Box.props.paddingBlock,
      paddingTop: BOX_META.Box.props.paddingTop,
      paddingRight: BOX_META.Box.props.paddingRight,
      paddingBottom: BOX_META.Box.props.paddingBottom,
      paddingLeft: BOX_META.Box.props.paddingLeft,
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
      topLevelTags: ['div'],
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
