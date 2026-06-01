import { ComponentMeta } from 'client/definitions'

import actionSurfaceMeta from '../../lib/components/core/ActionSurface/meta'
import appFrameMeta from '../../lib/components/core/AppFrame/meta'
import autocompleteMeta from '../../lib/components/pro/Autocomplete/meta'
import avatarMeta from '../../lib/components/pro/Avatar/meta'
import boxMeta from '../../lib/components/core/Box/meta'
import breadcrumbMeta from '../../lib/components/pro/Breadcrumb/meta'
import buttonMeta from '../../lib/components/core/Button/meta'
import calloutMeta from '../../lib/components/core/Callout/meta'
import checkboxMeta from '../../lib/components/core/Checkbox/meta'
import dialogMeta from '../../lib/components/pro/Dialog/meta'
import dividerMeta from '../../lib/components/core/Divider/meta'
import fadeMeta from '../../lib/components/pro/Fade/meta'
import flexMeta from '../../lib/components/core/Flex/meta'
import footerMeta from '../../lib/components/core/Footer/meta'
import formMeta from '../../lib/components/pro/Form/meta'
import gridMeta from '../../lib/components/core/Grid/meta'
import hydrationGateMeta from '../../lib/components/core/HydrationGate/meta'
import iconMeta from '../../lib/components/core/Icon/meta'
import iconButtonMeta from '../../lib/components/core/IconButton/meta'
import imageMeta from '../../lib/components/core/Image/meta'
import inputMeta from '../../lib/components/core/Input/meta'
import linkMeta from '../../lib/components/core/Link/meta'
import loaderMeta from '../../lib/components/core/Loader/meta'
import markerListMeta from '../../lib/components/core/MarkerList/meta'
import markupMeta from '../../lib/components/pro/Markup/meta'
import multiSelectMeta from '../../lib/components/pro/MultiSelect/meta'
import nebkitProviderMeta from '../../lib/components/core/NebkitProvider/meta'
import paginationMeta from '../../lib/components/pro/Pagination/meta'
import passwordInput from '../../lib/components/pro/PasswordInput/meta'
import resizeMeta from '../../lib/components/core/Resize/meta'
import revealMeta from '../../lib/components/core/Reveal/meta'
import rotateMeta from '../../lib/components/core/Rotate/meta'
import scaleMeta from '../../lib/components/pro/Scale/meta'
import sectionMeta from '../../lib/components/core/Section/meta'
import segmentMeta from '../../lib/components/core/Segment/meta'
import selectMeta from '../../lib/components/core/Select/meta'
import sideNavMeta from '../../lib/components/pro/SideNav/meta'
import slideMeta from '../../lib/components/core/Slide/meta'
import snackbarMeta from '../../lib/components/pro/Snackbar/meta'
import spacerMeta from '../../lib/components/core/Spacer/meta'
import splitViewMeta from '../../lib/components/pro/SplitView/meta'
import switchMeta from '../../lib/components/pro/Switch/meta'
import tableMeta from '../../lib/components/core/Table/meta'
import tabsMeta from '../../lib/components/pro/Tabs/meta'
import textMeta from '../../lib/components/core/Text/meta'
import textareaMeta from '../../lib/components/core/Textarea/meta'
import toolbarMeta from '../../lib/components/pro/Toolbar/meta'
import tooltipMeta from '../../lib/components/pro/Tooltip/meta'
import virtualListMeta from '../../lib/components/pro/VirtualList/meta'
import withIconMeta from '../../lib/components/core/WithIcon/meta'

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
