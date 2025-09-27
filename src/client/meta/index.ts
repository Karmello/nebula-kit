import { ComponentMeta } from 'client/definitions'

import animateMeta from './Animate/_index'
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
import iconMeta from './Icon/_index'
import iconButtonMeta from './IconButton/_index'
import markerListMeta from './MarkerList/_index'
import nebkitProviderMeta from './NebkitProvider/_index'
import sectionMeta from './Section/_index'
import sideNavMeta from './SideNav/_index'
import spacerMeta from './Spacer/_index'
import splitViewMeta from './SplitView/_index'
import tableMeta from './Table/_index'
import textMeta from './Text/_index'
import toolbarMeta from './Toolbar/_index'
import withIconMeta from './WithIcon/_index'

export default {
  Animate: animateMeta,
  AppFrame: appFrameMeta,
  Box: boxMeta,
  ButtonGroup: buttonGroupMeta,
  Button: buttonMeta,
  Callout: calloutMeta,
  Divider: dividerMeta,
  Flex: flexMeta,
  Grid: gridMeta,
  HtmlTag: htmlTagMeta,
  HydrationGate: hydrationGateMeta,
  Icon: iconMeta,
  IconButton: iconButtonMeta,
  MarkerList: markerListMeta,
  NebkitProvider: nebkitProviderMeta,
  Section: sectionMeta,
  SideNav: sideNavMeta,
  Spacer: spacerMeta,
  SplitView: splitViewMeta,
  Table: tableMeta,
  Text: textMeta,
  Toolbar: toolbarMeta,
  WithIcon: withIconMeta,
} as Record<string, Record<string, ComponentMeta<object>>>
