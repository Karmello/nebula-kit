import { ComponentMeta } from 'client/definitions'

import animateMeta from './Animate/_index'
import appFrameMeta from './AppFrame/_index'
import boxMeta from './Box/_index'
import breadcrumbMeta from './Breadcrumb/_index'
import buttonMeta from './Button/_index'
import calloutMeta from './Callout/_index'
import dividerMeta from './Divider/_index'
import dropdownList from './DropdownList/_index'
import flexMeta from './Flex/_index'
import footerMeta from './Footer/_index'
import formMeta from './Form/_index'
import gridMeta from './Grid/_index'
import htmlTagMeta from './HtmlTag/_index'
import hydrationGateMeta from './HydrationGate/_index'
import iconMeta from './Icon/_index'
import inputMeta from './Input/_index'
import linkMeta from './Link/_index'
import loaderMeta from './Loader/_index'
import markerListMeta from './MarkerList/_index'
import nebkitProviderMeta from './NebkitProvider/_index'
import portalMeta from './Portal/_index'
import revealMeta from './Reveal/_index'
import rotateMeta from './Rotate/_index'
import sectionMeta from './Section/_index'
import segmentMeta from './Segment/_index'
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
  Button: buttonMeta,
  Callout: calloutMeta,
  Divider: dividerMeta,
  DropdownList: dropdownList,
  Flex: flexMeta,
  Footer: footerMeta,
  Form: formMeta,
  Grid: gridMeta,
  HtmlTag: htmlTagMeta,
  HydrationGate: hydrationGateMeta,
  Icon: iconMeta,
  Input: inputMeta,
  Link: linkMeta,
  Loader: loaderMeta,
  MarkerList: markerListMeta,
  NebkitProvider: nebkitProviderMeta,
  Portal: portalMeta,
  Reveal: revealMeta,
  Rotate: rotateMeta,
  Section: sectionMeta,
  Segment: segmentMeta,
  Select: selectMeta,
  SideNav: sideNavMeta,
  Spacer: spacerMeta,
  SplitView: splitViewMeta,
  Table: tableMeta,
  Text: textMeta,
  Toolbar: toolbarMeta,
  WithIcon: withIconMeta,
} as Record<string, Record<string, ComponentMeta<object>>>
