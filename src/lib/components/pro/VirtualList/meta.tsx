import { BOX_META } from 'lib/components/core/Box/meta'
import { Box } from 'lib/index.core'
import { VirtualList, VirtualListProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { DEFAULT_VIRTUAL_LIST_SCROLL_ALIGN, DEFAULT_VIRTUAL_LIST_SCROLL_TO_INDEX, VIRTUAL_LIST_SCROLL_ALIGN } from './definitions'

export const VIRTUAL_LIST_META = {
  VirtualList: {
    overview: {
      bundle: 'pro',
      title: 'High-performance, fixed-height virtualized list for rendering large datasets efficiently.',
      description:
        'VirtualList is a low-level layout primitive for rendering long lists in a predictable and performant way. It limits DOM output to only what is visible while preserving natural scrolling behavior.',
      features: [
        'renders only visible items to keep the dom small',
        'fixed-height, index-based virtualization',
        'predictable scrolling without layout guessing',
        'designed for large lists and frequent updates',
        'suitable for dropdowns menus and command palettes',
      ],
      composedOf: ['Box'],
      exposedTags: ['div'],
    },
    props: {
      color: {
        ...BOX_META.Box.props.color,
        description: 'Color applied to the surface behind list items.',
      },
      elevated: {
        ...BOX_META.Box.props.elevated,
        description: 'Applies an elevated surface level behind the list items.',
      },
      ensureVisibleIndex: {
        options: ['number'],
        description:
          'Index of the item that should be kept fully visible within the list viewport. When provided, the list scrolls only if needed to ensure this item remains in view.',
      },
      intent: {
        ...BOX_META.Box.props.intent,
        description: 'Color tone applied to the surface behind list items.',
      },
      itemBlockSize: {
        options: ['number'],
        isRequired: true,
        description: 'Height of a single list item in pixels.',
      },
      items: {
        options: ['Array<T>'],
        isRequired: true,
        description: 'Data array used to generate virtualized items.',
      },
      overscan: {
        options: ['number'],
        description:
          'Number of extra items rendered outside the visible range. If not provided the list renders one full visible range before and after.',
      },
      renderItem: {
        options: ['(item: T, index: number) => ReactNode'],
        isRequired: true,
        description: 'Render function called for each visible list item.',
      },
      scrollAlign: {
        options: VIRTUAL_LIST_SCROLL_ALIGN,
        defaultValue: String(DEFAULT_VIRTUAL_LIST_SCROLL_ALIGN),
        description: 'Defines how the item targeted by the "scrollToIndex" prop is positioned within the scroll area.',
      },
      scrollToIndex: {
        options: ['number'],
        defaultValue: String(DEFAULT_VIRTUAL_LIST_SCROLL_TO_INDEX),
        description: 'Scrolls the list to the item at the given index on render.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      visibleItemsCount: {
        options: ['number'],
        isRequired: true,
        description: 'Specifies the number of list items visible before scrolling is enabled.',
      },
    },
    examples: [
      {
        description: 'Virtual list with 100 items, displaying 10 and rendering 30 at a time.',
        sandBoxWithNoPadding: true,
        jsx: (
          <VirtualList<{ label: string }>
            items={Array.from({ length: 100 }, (v, k) => ({ label: `List item ${k + 1}` }))}
            itemBlockSize={50}
            visibleItemsCount={10}
            renderItem={({ label }) => (
              <Box
                drawable
                interactive
                variant="solid"
                intent="muted"
                borderRadius="0px"
                blockSize="50px"
                textAlign="center"
                padding="15px"
              >
                {label}
              </Box>
            )}
            intent="muted"
          />
        ),
        code: `<VirtualList<{ label: string }>
  items={Array.from({ length: 100 }, (v, k) => ({ label: \`List item $\{k + 1}\` }))}
  itemBlockSize={50}
  visibleItemsCount={10}
  renderItem={({ label }, index) => (
    <Box
      drawable
      interactive
      variant="solid"
      intent="muted"
      borderRadius="0px"
      blockSize="50px"
      textAlign="center"
      padding="15px"
    >
      {label}
    </Box>
  )}
  intent="muted"
/>`,
      },
    ],
    changelog: {
      '0.11.0': ['changed `itemHeight` prop to `itemBlockSize`'],
      '0.3.0': ['released'],
    },
  } satisfies ComponentMeta<VirtualListProps>,
}
