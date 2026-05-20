import { ComponentMeta } from 'client/definitions'

import appFrameMeta from './AppFrame/_index'
import autocompleteMeta from './Autocomplete/_index'
import avatarMeta from './Avatar/_index'
import boxMeta from './Box/_index'
import breadcrumbMeta from './Breadcrumb/_index'
import buttonMeta from './Button/_index'
import calloutMeta from './Callout/_index'
import checkboxMeta from './Checkbox/_index'
import dialogMeta from './Dialog/_index'
import dividerMeta from './Divider/_index'
import dropdownList from './DropdownList/_index'
import flexMeta from './Flex/_index'
import floatingMeta from './Floating/_index'
import focusTrapMeta from './FocusTrap/_index'
import footerMeta from './Footer/_index'
import formMeta from './Form/_index'
import gridMeta from './Grid/_index'
import htmlTagMeta from './HtmlTag/_index'
import hydrationGateMeta from './HydrationGate/_index'
import iconMeta from './Icon/_index'
import imageMeta from './Image/_index'
import inputMeta from './Input/_index'
import linkMeta from './Link/_index'
import loaderMeta from './Loader/_index'
import markerListMeta from './MarkerList/_index'
import markupMeta from './Markup/_index'
import measureMeta from './Measure/_index'
import multiSelectMeta from './MultiSelect/_index'
import nebkitProviderMeta from './NebkitProvider/_index'
import paginationMeta from './Pagination/_index'
import passwordInput from './PasswordInput/_index'
import portalMeta from './Portal/_index'
import resizeMeta from './Resize/_index'
import revealMeta from './Reveal/_index'
import rotateMeta from './Rotate/_index'
import sectionMeta from './Section/_index'
import segmentMeta from './Segment/_index'
import selectMeta from './Select/_index'
import sideNavMeta from './SideNav/_index'
import slideMeta from './Slide/_index'
import snackbarMeta from './Snackbar/_index'
import spacerMeta from './Spacer/_index'
import splitViewMeta from './SplitView/_index'
import switchMeta from './Switch/_index'
import tableMeta from './Table/_index'
import tabsMeta from './Tabs/_index'
import textMeta from './Text/_index'
import textareaMeta from './Textarea/_index'
import toolbarMeta from './Toolbar/_index'
import tooltipMeta from './Tooltip/_index'
import virtualListMeta from './VirtualList/_index'
import withIconMeta from './WithIcon/_index'

const META = {
  AppFrame: appFrameMeta,
  Autocomplete: autocompleteMeta,
  Avatar: avatarMeta,
  Box: boxMeta,
  Breadcrumb: breadcrumbMeta,
  Button: buttonMeta,
  Callout: calloutMeta,
  Checkbox: checkboxMeta,
  Dialog: dialogMeta,
  Divider: dividerMeta,
  DropdownList: dropdownList,
  Flex: flexMeta,
  Floating: floatingMeta,
  FocusTrap: focusTrapMeta,
  Footer: footerMeta,
  Form: formMeta,
  Grid: gridMeta,
  HtmlTag: htmlTagMeta,
  HydrationGate: hydrationGateMeta,
  Icon: iconMeta,
  Image: imageMeta,
  Input: inputMeta,
  Link: linkMeta,
  Loader: loaderMeta,
  MarkerList: markerListMeta,
  Markup: markupMeta,
  Measure: measureMeta,
  MultiSelect: multiSelectMeta,
  NebkitProvider: nebkitProviderMeta,
  Pagination: paginationMeta,
  PasswordInput: passwordInput,
  Portal: portalMeta,
  Resize: resizeMeta,
  Reveal: revealMeta,
  Rotate: rotateMeta,
  Section: sectionMeta,
  Segment: segmentMeta,
  Select: selectMeta,
  SideNav: sideNavMeta,
  Slide: slideMeta,
  Snackbar: snackbarMeta,
  Spacer: spacerMeta,
  SplitView: splitViewMeta,
  Switch: switchMeta,
  Table: tableMeta,
  Tabs: tabsMeta,
  Text: textMeta,
  Textarea: textareaMeta,
  Toolbar: toolbarMeta,
  VirtualList: virtualListMeta,
  Tooltip: tooltipMeta,
  WithIcon: withIconMeta,
} as Record<string, Record<string, ComponentMeta<object>>>

export default META
