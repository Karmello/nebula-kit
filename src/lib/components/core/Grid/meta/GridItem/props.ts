import { ComponentMeta, DOCS_CSS_LABEL } from 'client/definitions'
import { CSS_GRID_ITEM_ALIGN_SELF, CSS_GRID_ITEM_JUSTIFY_SELF } from 'lib/definitions'

import { BOX_PROPS_META } from '../../../Box/meta/props'
import { type GridItemProps } from '../../GridItem/definitions'

const GRID_ITEM_PROPS_META: ComponentMeta<GridItemProps>['props'] = {
  alignSelf: {
    options: CSS_GRID_ITEM_ALIGN_SELF,
    isResponsive: true,
    description: 'Controls vertical alignment of the item within its grid cell.',
    link: true,
  },
  children: {
    ...BOX_PROPS_META.children,
    isRequired: true,
  },
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
  tag: BOX_PROPS_META.tag,
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
}

export { GRID_ITEM_PROPS_META }
