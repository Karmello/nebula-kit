import { ComponentMeta } from 'client/definitions'

import appFrameMeta from './AppFrame/app-frame.meta'
import boxMeta from './Box/box.meta'
import buttonMeta from './Button/button.meta'
import buttonGroupMeta from './ButtonGroup/button-group.meta'
import calloutMeta from './Callout/callout.meta'
import dividerMeta from './Divider/divider.meta'
import flexMeta from './Flex/flex.meta'
import gridMeta from './Grid/grid.meta'
import htmlTagMeta from './HtmlTag/html-tag.meta'
import hydrationGateMeta from './HydrationGate/hydration-gate.meta'
import iconButtonMeta from './IconButton/icon-button.meta'
import markerListMeta from './MarkerList/marker-list.meta'
import nebkitProviderMeta from './NebkitProvider/nebkit-provider.meta'
import sectionMeta from './Section/section.meta'
import spacerMeta from './Spacer/spacer.meta'
import splitViewMeta from './SplitView/split-view.meta'
import svgIconMeta from './SvgIcon/svg-icon.meta'
import textMeta from './Text/text.meta'
import toolbarMeta from './Toolbar/toolbar.meta'
import withIconMeta from './WithIcon/with-icon.meta'

export default {
  'app-frame': appFrameMeta,
  box: boxMeta,
  'button-group': buttonGroupMeta,
  button: buttonMeta,
  callout: calloutMeta,
  divider: dividerMeta,
  flex: flexMeta,
  grid: gridMeta,
  'html-tag': htmlTagMeta,
  'hydration-gate': hydrationGateMeta,
  'icon-button': iconButtonMeta,
  'marker-list': markerListMeta,
  'nebkit-provider': nebkitProviderMeta,
  section: sectionMeta,
  spacer: spacerMeta,
  'split-view': splitViewMeta,
  'svg-icon': svgIconMeta,
  text: textMeta,
  toolbar: toolbarMeta,
  'with-icon': withIconMeta,
} as Record<string, Record<string, ComponentMeta<unknown>>>
