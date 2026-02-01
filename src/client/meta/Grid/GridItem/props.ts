import { ComponentMeta } from 'client/definitions'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { GridItemProps } from 'lib/components'
import { CSS_GRID_ITEM_ALIGN_SELF, CSS_GRID_ITEM_JUSTIFY_SELF } from 'lib/definitions'

const GRID_ITEM_PROPS_META: ComponentMeta<GridItemProps>['props'] = {
  ...HTML_TAG_PROPS_META,
  alignSelf: {
    options: CSS_GRID_ITEM_ALIGN_SELF,
    isResponsive: true,
    description: 'Controls vertical alignment of the item within its grid cell.',
    link: true,
    tooltip: CSS_GRID_ITEM_ALIGN_SELF,
  },
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  gridColumn: {
    options: ['CSS'],
    isResponsive: true,
    description: "Sets the item's horizontal position or span between grid columns.",
    link: true,
  },
  gridRow: {
    options: ['CSS'],
    isResponsive: true,
    description: "Sets the item's vertical position or span between grid rows.",
    link: true,
  },
  justifySelf: {
    options: CSS_GRID_ITEM_JUSTIFY_SELF,
    isResponsive: true,
    description: 'Controls horizontal alignment of the item within its grid cell.',
    link: true,
    tooltip: CSS_GRID_ITEM_JUSTIFY_SELF,
  },
}

export { GRID_ITEM_PROPS_META }
