import { ComponentMeta } from 'client/definitions'

import { ACTION_SURFACE_META } from '../../lib/components/core/ActionSurface/meta'
import { APP_FRAME_META } from '../../lib/components/core/AppFrame/meta'
import { BOX_META } from '../../lib/components/core/Box/meta'
import { BUTTON_META } from '../../lib/components/core/Button/meta'
import { CALLOUT_META } from '../../lib/components/core/Callout/meta'
import { CHECKBOX_META } from '../../lib/components/core/Checkbox/meta'
import { DIVIDER_META } from '../../lib/components/core/Divider/meta'
import { FLEX_META } from '../../lib/components/core/Flex/meta'
import { FOOTER_META } from '../../lib/components/core/Footer/meta'
import { GRID_META } from '../../lib/components/core/Grid/meta'
import { HYDRATION_GATE_META } from '../../lib/components/core/HydrationGate/meta'
import { ICON_META } from '../../lib/components/core/Icon/meta'
import { ICON_BUTTON_META } from '../../lib/components/core/IconButton/meta'
import { IMAGE_META } from '../../lib/components/core/Image/meta'
import { INPUT_META } from '../../lib/components/core/Input/meta'
import { LINK_META } from '../../lib/components/core/Link/meta'
import { LOADER_META } from '../../lib/components/core/Loader/meta'
import { MARKER_LIST_META } from '../../lib/components/core/MarkerList/meta'
import { NEBKIT_PROVIDER_META } from '../../lib/components/core/NebkitProvider/meta'
import { RESIZE_META } from '../../lib/components/core/Resize/meta'
import { REVEAL_META } from '../../lib/components/core/Reveal/meta'
import { ROTATE_META } from '../../lib/components/core/Rotate/meta'
import { SECTION_META } from '../../lib/components/core/Section/meta'
import { SEGMENT_META } from '../../lib/components/core/Segment/meta'
import { SELECT_META } from '../../lib/components/core/Select/meta'
import { SLIDE_META } from '../../lib/components/core/Slide/meta'
import { SPACER_META } from '../../lib/components/core/Spacer/meta'
import { TABLE_META } from '../../lib/components/core/Table/meta'
import { TEXT_META } from '../../lib/components/core/Text/meta'
import { TEXTAREA_META } from '../../lib/components/core/Textarea/meta'
import { WITH_ICON_META } from '../../lib/components/core/WithIcon/meta'
import { AUTOCOMPLETE_META } from '../../lib/components/pro/Autocomplete/meta'
import { AVATAR_META } from '../../lib/components/pro/Avatar/meta'
import { BREADCRUMB_META } from '../../lib/components/pro/Breadcrumb/meta'
import { DIALOG_META } from '../../lib/components/pro/Dialog/meta'
import { FADE_META } from '../../lib/components/pro/Fade/meta'
import { FORM_META } from '../../lib/components/pro/Form/meta'
import { MARKUP_META } from '../../lib/components/pro/Markup/meta'
import { MULTI_SELECT_META } from '../../lib/components/pro/MultiSelect/meta'
import { PAGINATION_META } from '../../lib/components/pro/Pagination/meta'
import { PASSWORD_META } from '../../lib/components/pro/PasswordInput/meta'
import { SCALE_META } from '../../lib/components/pro/Scale/meta'
import { SIDE_NAV_META } from '../../lib/components/pro/SideNav/meta'
import { SNACKBAR_META } from '../../lib/components/pro/Snackbar/meta'
import { SPLIT_VIEW_META } from '../../lib/components/pro/SplitView/meta'
import { SWITCH_META } from '../../lib/components/pro/Switch/meta'
import { TABS_META } from '../../lib/components/pro/Tabs/meta'
import { TOOLBAR_META } from '../../lib/components/pro/Toolbar/meta'
import { TOOLTIP_META } from '../../lib/components/pro/Tooltip/meta'
import { VIRTUAL_LIST_META } from '../../lib/components/pro/VirtualList/meta'

const META = {
  ActionSurface: ACTION_SURFACE_META,
  AppFrame: APP_FRAME_META,
  Autocomplete: AUTOCOMPLETE_META,
  Avatar: AVATAR_META,
  Box: BOX_META,
  Breadcrumb: BREADCRUMB_META,
  Button: BUTTON_META,
  Callout: CALLOUT_META,
  Checkbox: CHECKBOX_META,
  Dialog: DIALOG_META,
  Divider: DIVIDER_META,
  Fade: FADE_META,
  Flex: FLEX_META,
  Footer: FOOTER_META,
  Form: FORM_META,
  Grid: GRID_META,
  HydrationGate: HYDRATION_GATE_META,
  Icon: ICON_META,
  IconButton: ICON_BUTTON_META,
  Image: IMAGE_META,
  Input: INPUT_META,
  Link: LINK_META,
  Loader: LOADER_META,
  MarkerList: MARKER_LIST_META,
  Markup: MARKUP_META,
  MultiSelect: MULTI_SELECT_META,
  NebkitProvider: NEBKIT_PROVIDER_META,
  Pagination: PAGINATION_META,
  PasswordInput: PASSWORD_META,
  Resize: RESIZE_META,
  Reveal: REVEAL_META,
  Rotate: ROTATE_META,
  Scale: SCALE_META,
  Section: SECTION_META,
  Segment: SEGMENT_META,
  Select: SELECT_META,
  SideNav: SIDE_NAV_META,
  Slide: SLIDE_META,
  Snackbar: SNACKBAR_META,
  Spacer: SPACER_META,
  SplitView: SPLIT_VIEW_META,
  Switch: SWITCH_META,
  Table: TABLE_META,
  Tabs: TABS_META,
  Text: TEXT_META,
  Textarea: TEXTAREA_META,
  Toolbar: TOOLBAR_META,
  VirtualList: VIRTUAL_LIST_META,
  Tooltip: TOOLTIP_META,
  WithIcon: WITH_ICON_META,
} as Record<string, Record<string, ComponentMeta<object>>>

export default META
