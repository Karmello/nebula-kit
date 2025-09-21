import { ComponentMeta } from 'client/definitions'

import appFrameMeta from './AppFrame/_index'
import boxMeta from './Box/_index'
import buttonMeta from './Button/_index'
import buttonGroupMeta from './ButtonGroup/_index'
import calloutMeta from './Callout/_index'
import dividerMeta from './Divider/_index'
import flexMeta from './Flex/_index'
import gridMeta from './Grid/_index'
import htmlTagMeta from './HtmlTag/_index'
import hydrationGateMeta from './HydrationGate/_index'
import iconButtonMeta from './IconButton/_index'
import markerListMeta from './MarkerList/_index'
import nebkitProviderMeta from './NebkitProvider/_index'
import sectionMeta from './Section/_index'
import spacerMeta from './Spacer/_index'
import splitViewMeta from './SplitView/_index'
import svgIconMeta from './SvgIcon/_index'
import textMeta from './Text/_index'
import toolbarMeta from './Toolbar/_index'
import withIconMeta from './WithIcon/_index'

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
} as Record<string, Record<string, ComponentMeta<object>>>
