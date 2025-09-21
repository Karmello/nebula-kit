import { ComponentMeta } from 'client/definitions'
import { GridItemOwnProps } from 'lib/components/layout-base/Grid/GridItem/definitions'
import { CssGridItemAlignSelf, CssGridItemJustifySelf } from 'lib/definitions'

export default [
  {
    name: 'gridColumn',
    options: ['CSS'],
    defaultValue: 'auto',
    isRequired: false,
    isResponsive: true,
    description: "Sets the item's horizontal position or span between grid columns.",
  },
  {
    name: 'gridRow',
    options: ['CSS'],
    defaultValue: 'auto',
    isRequired: false,
    isResponsive: true,
    description: "Sets the item's vertical position or span between grid rows.",
  },
  {
    name: 'justifySelf',
    options: Object.values(CssGridItemJustifySelf),
    defaultValue: CssGridItemJustifySelf[0],
    isRequired: false,
    isResponsive: true,
    description: 'Controls horizontal alignment of the item within its grid cell.',
  },
  {
    name: 'alignSelf',
    options: Object.values(CssGridItemAlignSelf),
    defaultValue: CssGridItemAlignSelf[0],
    isRequired: false,
    isResponsive: true,
    description: 'Controls vertical alignment of the item within its grid cell.',
  },
] as ComponentMeta<GridItemOwnProps>['ownProps']
