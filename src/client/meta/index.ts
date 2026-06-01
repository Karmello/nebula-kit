import { ComponentMeta } from 'client/definitions'

import actionSurfaceMeta from '../../lib/components/core/ActionSurface/meta/_index'
import appFrameMeta from '../../lib/components/core/AppFrame/meta/_index'
import autocompleteMeta from '../../lib/components/pro/Autocomplete/meta/_index'
import avatarMeta from '../../lib/components/pro/Avatar/meta/_index'
import boxMeta from '../../lib/components/core/Box/meta/_index'
import breadcrumbMeta from '../../lib/components/pro/Breadcrumb/meta/_index'
import buttonMeta from '../../lib/components/core/Button/meta/_index'
import calloutMeta from '../../lib/components/core/Callout/meta/_index'
import checkboxMeta from '../../lib/components/core/Checkbox/meta/_index'
import dialogMeta from '../../lib/components/pro/Dialog/meta/_index'
import dividerMeta from '../../lib/components/core/Divider/meta/_index'
import fadeMeta from '../../lib/components/pro/Fade/meta/_index'
import flexMeta from '../../lib/components/core/Flex/meta/_index'
import footerMeta from '../../lib/components/core/Footer/meta/_index'
import formMeta from '../../lib/components/pro/Form/meta/_index'
import gridMeta from '../../lib/components/core/Grid/meta/_index'
import hydrationGateMeta from '../../lib/components/core/HydrationGate/meta/_index'
import iconMeta from '../../lib/components/core/Icon/meta/_index'
import iconButtonMeta from '../../lib/components/core/IconButton/meta/_index'
import imageMeta from '../../lib/components/core/Image/meta/_index'
import inputMeta from '../../lib/components/core/Input/meta/_index'
import linkMeta from '../../lib/components/core/Link/meta/_index'
import loaderMeta from '../../lib/components/core/Loader/meta/_index'
import markerListMeta from '../../lib/components/core/MarkerList/meta/_index'
import markupMeta from '../../lib/components/pro/Markup/meta/_index'
import multiSelectMeta from '../../lib/components/pro/MultiSelect/meta/_index'
import nebkitProviderMeta from '../../lib/components/core/NebkitProvider/meta/_index'
import paginationMeta from '../../lib/components/pro/Pagination/meta/_index'
import passwordInput from '../../lib/components/pro/PasswordInput/meta/_index'
import resizeMeta from '../../lib/components/core/Resize/meta/_index'
import revealMeta from '../../lib/components/core/Reveal/meta/_index'
import rotateMeta from '../../lib/components/core/Rotate/meta/_index'
import scaleMeta from '../../lib/components/pro/Scale/meta/_index'
import sectionMeta from '../../lib/components/core/Section/meta/_index'
import segmentMeta from '../../lib/components/core/Segment/meta/_index'
import selectMeta from '../../lib/components/core/Select/meta/_index'
import sideNavMeta from '../../lib/components/pro/SideNav/meta/_index'
import slideMeta from '../../lib/components/core/Slide/meta/_index'
import snackbarMeta from '../../lib/components/pro/Snackbar/meta/_index'
import spacerMeta from '../../lib/components/core/Spacer/meta/_index'
import splitViewMeta from '../../lib/components/pro/SplitView/meta/_index'
import switchMeta from '../../lib/components/pro/Switch/meta/_index'
import tableMeta from '../../lib/components/core/Table/meta/_index'
import tabsMeta from '../../lib/components/pro/Tabs/meta/_index'
import textMeta from '../../lib/components/core/Text/meta/_index'
import textareaMeta from '../../lib/components/core/Textarea/meta/_index'
import toolbarMeta from '../../lib/components/pro/Toolbar/meta/_index'
import tooltipMeta from '../../lib/components/pro/Tooltip/meta/_index'
import virtualListMeta from '../../lib/components/pro/VirtualList/meta/_index'
import withIconMeta from '../../lib/components/core/WithIcon/meta/_index'

const META = {
  ActionSurface: actionSurfaceMeta,
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
  Fade: fadeMeta,
  Flex: flexMeta,
  Footer: footerMeta,
  Form: formMeta,
  Grid: gridMeta,
  HydrationGate: hydrationGateMeta,
  Icon: iconMeta,
  IconButton: iconButtonMeta,
  Image: imageMeta,
  Input: inputMeta,
  Link: linkMeta,
  Loader: loaderMeta,
  MarkerList: markerListMeta,
  Markup: markupMeta,
  MultiSelect: multiSelectMeta,
  NebkitProvider: nebkitProviderMeta,
  Pagination: paginationMeta,
  PasswordInput: passwordInput,
  Resize: resizeMeta,
  Reveal: revealMeta,
  Rotate: rotateMeta,
  Scale: scaleMeta,
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
