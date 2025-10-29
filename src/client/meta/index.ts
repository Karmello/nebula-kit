import { ComponentMeta } from 'client/definitions'

import animateMeta from './Animate/_index'
import appFrameMeta from './AppFrame/_index'
import boxMeta from './Box/_index'
import breadcrumbMeta from './Breadcrumb/_index'
import buttonMeta from './Button/_index'
import buttonGroupMeta from './ButtonGroup/_index'
import calloutMeta from './Callout/_index'
import dividerMeta from './Divider/_index'
import dropdownList from './DropdownList/_index'
import flexMeta from './Flex/_index'
import footerMeta from './Footer/_index'
import gridMeta from './Grid/_index'
import htmlTagMeta from './HtmlTag/_index'
import hydrationGateMeta from './HydrationGate/_index'
import iconMeta from './Icon/_index'
import linkMeta from './Link/_index'
import markerListMeta from './MarkerList/_index'
import nebkitProviderMeta from './NebkitProvider/_index'
import portalMeta from './Portal/_index'
import revealMeta from './Reveal/_index'
import sectionMeta from './Section/_index'
import selectMeta from './Select/_index'
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
  Breadcrumb: breadcrumbMeta,
  ButtonGroup: buttonGroupMeta,
  Button: buttonMeta,
  Callout: calloutMeta,
  Divider: dividerMeta,
  DropdownList: dropdownList,
  Flex: flexMeta,
  Footer: footerMeta,
  Grid: gridMeta,
  HtmlTag: htmlTagMeta,
  HydrationGate: hydrationGateMeta,
  Icon: iconMeta,
  Link: linkMeta,
  MarkerList: markerListMeta,
  NebkitProvider: nebkitProviderMeta,
  Portal: portalMeta,
  Reveal: revealMeta,
  Section: sectionMeta,
  Select: selectMeta,
  SideNav: sideNavMeta,
  Spacer: spacerMeta,
  SplitView: splitViewMeta,
  Table: tableMeta,
  Text: textMeta,
  Toolbar: toolbarMeta,
  WithIcon: withIconMeta,
} as Record<string, Record<string, ComponentMeta<object>>>
