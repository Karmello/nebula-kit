import {
  CSS_GRID_AUTO_FLOW,
  CSS_GRID_DISPLAY,
  CSS_GRID_ITEM_ALIGN_SELF,
  CSS_GRID_ITEM_JUSTIFY_SELF,
  CSS_GRID_PLACE_CONTENT,
  CSS_GRID_PLACE_ITEMS,
} from 'lib/constants'
import { GridItemProps, GridProps } from 'lib/index.core'
import { ComponentMeta, DOCS_CSS_LABEL } from 'client/definitions'

import { BOX_META } from '../../Box/meta'
import { GRID_CHANGELOG } from './changelog'
import { GRID_EXAMPLES, GRID_ITEM_EXAMPLES } from './examples'

export const GRID_META = {
  Grid: {
    overview: {
      bundle: 'core',
      title:
        'Layout component built on CSS Grid, providing a flexible two-dimensional system for arranging content into rows and columns with consistent spacing and alignment.',
      features: [
        'provides a CSS Grid-based layout wrapper',
        'establishes rows and columns to align and distribute children',
        'manages spacing between items with gap properties',
      ],
      composedOf: ['Box'],
      slots: ['Grid.Item'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        description: 'Grid.Item or any React node.',
      },
      columnGap: {
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Sets the spacing between grid columns.',
        link: true,
      },
      display: {
        options: CSS_GRID_DISPLAY,
        isResponsive: true,
        description: 'Switches between block and inline behavior.',
        link: true,
      },
      gap: {
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Sets the spacing between rows and columns in the grid.',
        link: true,
      },
      gridAutoColumns: {
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Defines the size of columns that are created automatically.',
        link: true,
      },
      gridAutoFlow: {
        options: CSS_GRID_AUTO_FLOW,
        isResponsive: true,
        description: 'Controls how items are automatically placed into the grid.',
        link: true,
      },
      gridAutoRows: {
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Defines the size of rows that are created automatically.',
        link: true,
      },
      gridTemplateColumns: {
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Defines the column structure of the grid.',
        link: true,
      },
      gridTemplateRows: {
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: "Sets how the grid's rows are laid out.",
        link: true,
      },
      placeContent: {
        options: CSS_GRID_PLACE_CONTENT,
        isResponsive: true,
        description: 'Controls how the grid as a whole is aligned within the container.',
        link: true,
      },
      placeItems: {
        options: CSS_GRID_PLACE_ITEMS,
        isResponsive: true,
        description: 'Controls how grid items are aligned within their cells.',
        link: true,
      },
      rowGap: {
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Sets the spacing between grid rows.',
        link: true,
      },
      tag: BOX_META.Box.props.tag,
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
    examples: GRID_EXAMPLES,
    changelog: GRID_CHANGELOG,
  } satisfies ComponentMeta<GridProps>,
  GridItem: {
    overview: {
      bundle: 'core',
      name: 'Grid.Item?',
      title: 'Wrapper for a single child positioned within the grid.',
      features: ['positions a child in a specific row and/or column', "overrides the item's alignment relative to its cell"],
      composedOf: ['Box'],
    },
    props: {
      alignSelf: {
        options: CSS_GRID_ITEM_ALIGN_SELF,
        isResponsive: true,
        description: 'Controls vertical alignment of the item within its grid cell.',
        link: true,
      },
      children: BOX_META.Box.props.children,
      gridColumn: {
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: "Sets the item's horizontal position or span between grid columns.",
        link: true,
      },
      gridRow: {
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: "Sets the item's vertical position or span between grid rows.",
        link: true,
      },
      justifySelf: {
        options: CSS_GRID_ITEM_JUSTIFY_SELF,
        isResponsive: true,
        description: 'Controls horizontal alignment of the item within its grid cell.',
        link: true,
      },
      tag: BOX_META.Box.props.tag,
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
    examples: GRID_ITEM_EXAMPLES,
  } satisfies ComponentMeta<GridItemProps>,
}
