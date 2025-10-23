import { ComponentMeta } from 'client/definitions'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { GridItemProps } from 'lib/components/layout/Grid/GridItem/definitions'
import { CssGridItemAlignSelf, CssGridItemJustifySelf } from 'lib/definitions'

const GRID_ITEM_PROPS_META: ComponentMeta<GridItemProps>['props'] = {
  ...HTML_TAG_PROPS_META,
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  gridColumn: {
    options: ['CSS'],
    defaultValue: 'auto',
    isRequired: false,
    isResponsive: true,
    description: "Sets the item's horizontal position or span between grid columns.",
  },
  gridRow: {
    options: ['CSS'],
    defaultValue: 'auto',
    isRequired: false,
    isResponsive: true,
    description: "Sets the item's vertical position or span between grid rows.",
  },
  justifySelf: {
    options: Object.values(CssGridItemJustifySelf),
    defaultValue: CssGridItemJustifySelf[0],
    isRequired: false,
    isResponsive: true,
    description: 'Controls horizontal alignment of the item within its grid cell.',
  },
  alignSelf: {
    options: Object.values(CssGridItemAlignSelf),
    defaultValue: CssGridItemAlignSelf[0],
    isRequired: false,
    isResponsive: true,
    description: 'Controls vertical alignment of the item within its grid cell.',
  },
}

export { GRID_ITEM_PROPS_META }
