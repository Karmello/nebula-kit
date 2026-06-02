import { BOX_META } from 'lib/components/core/Box/meta'
import { GRID_META } from 'lib/components/core/Grid/meta'
import { DEFAULT_SWITCH_AT, SWITCH_AT } from 'lib/constants'
import { Box, Text } from 'lib/index.core'
import { SplitView, SplitViewMainBarProps, SplitViewMainProps, SplitViewProps, SplitViewSideProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { SPLIT_VIEW_SIDE_POSITIONS } from './definitions'
import { DEFAULT_SPLIT_VIEW_SIDE_INTENT, DEFAULT_SPLIT_VIEW_SIDE_WIDTH } from './slots'

export const SPLIT_VIEW_META = {
  SplitView: {
    overview: {
      bundle: 'pro',
      title: 'Two-panel layout for displaying side navigation alongside main content.',
      composedOf: ['Grid'],
      features: [
        'provides a two-panel horizontal layout with a main content and side panel areas',
        'switches the side panel between overlay and inline modes at the specified breakpoint (switchAt)',
        'manages side panel visibility based on the active layout mode',
        'stretches to fill the full height of its parent container',
        'in overlay mode, blocks pointer interaction outside the active panel',
      ],
      topLevelTags: ['div'],
      slots: ['SplitView.Side', 'SplitView.Main'],
    },
    props: {
      tagAttrs: GRID_META.Grid.props.tagAttrs,
      tagRef: GRID_META.Grid.props.tagRef,
      children: {
        ...GRID_META.Grid.props.children,
        isRequired: true,
        options: ['SplitView.Side', 'SplitView.Main'],
        description: 'Accepts slots directly or via a render function with access to the SplitView context.',
      },
      sidePosition: {
        options: SPLIT_VIEW_SIDE_POSITIONS as unknown as string[],
        defaultValue: SPLIT_VIEW_SIDE_POSITIONS[0],
        description: 'Controls which horizontal side the side panel is attached to.',
      },
      switchAt: {
        options: SWITCH_AT,
        defaultValue: DEFAULT_SWITCH_AT,
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
              <SplitView.Side intent="secondary" inlineSize={{ base: '300px', md: '500px', lg: '150px' }}>
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
  } as ComponentMeta<SplitViewProps>,
  SplitViewSide: {
    overview: {
      bundle: 'pro',
      name: 'SplitView.Side',
      title: 'Defines the side panel region of the SplitView layout.',
      features: ['traps keyboard focus when the side panel is rendered in overlay mode'],
      guidelines: ['typically used for navigation, menus or supplementary content'],
      composedOf: ['Box', 'Flex', 'IconButton', 'Resize'],
      topLevelTags: ['aside'],
    },
    props: {
      blockSize: BOX_META.Box.props.blockSize,
      brand: BOX_META.Box.props.brand,
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      color: BOX_META.Box.props.color,
      inlineSize: {
        ...BOX_META.Box.props.inlineSize,
        defaultValue: DEFAULT_SPLIT_VIEW_SIDE_WIDTH,
      },
      intent: {
        ...BOX_META.Box.props.intent,
        defaultValue: JSON.stringify(DEFAULT_SPLIT_VIEW_SIDE_INTENT),
      },
      padding: BOX_META.Box.props.padding,
      paddingInline: BOX_META.Box.props.paddingInline,
      paddingBlock: BOX_META.Box.props.paddingBlock,
      paddingTop: BOX_META.Box.props.paddingTop,
      paddingRight: BOX_META.Box.props.paddingRight,
      paddingBottom: BOX_META.Box.props.paddingBottom,
      paddingLeft: BOX_META.Box.props.paddingLeft,
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      theme: BOX_META.Box.props.theme,
    },
  } as ComponentMeta<SplitViewSideProps>,
  SplitViewMain: {
    overview: {
      bundle: 'pro',
      name: 'SplitView.Main',
      title: 'Defines the main content region of the SplitView layout.',
      features: ['holds the primary content displayed alongside the side panel'],
      composedOf: ['Box', 'Flex', 'Button', 'Spacer'],
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
      padding: BOX_META.Box.props.padding,
      paddingInline: BOX_META.Box.props.paddingInline,
      paddingBlock: BOX_META.Box.props.paddingBlock,
      paddingTop: BOX_META.Box.props.paddingTop,
      paddingRight: BOX_META.Box.props.paddingRight,
      paddingBottom: BOX_META.Box.props.paddingBottom,
      paddingLeft: BOX_META.Box.props.paddingLeft,
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
  } as ComponentMeta<SplitViewMainProps>,
  SplitViewMainBar: {
    overview: {
      bundle: 'pro',
      name: 'SplitView.MainBar?',
      title: 'Defines the horizontal slot above the main content.',
      features: ['can contain any custom content, such as breadcrumbs or other controls'],
      guidelines: ['should be placed inside SplitView.Main slot'],
      composedOf: ['Box'],
      topLevelTags: ['div'],
    },
    props: {
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
    },
  } as ComponentMeta<SplitViewMainBarProps>,
}
