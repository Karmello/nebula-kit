import { FOCUS_TRAP_META } from 'lib/components/pro/FocusTrap/meta'
import { PORTAL_META } from 'lib/components/pro/Portal/meta'
import { ComponentMeta } from 'client/definitions'

import { APP_FRAME_META } from '../../lib/components/core/AppFrame/meta'
import { BOX_META } from '../../lib/components/core/Box/meta'
import { BUTTON_META } from '../../lib/components/core/Button/meta'
import { CALLOUT_META } from '../../lib/components/core/Callout/meta'
import { CHECKBOX_META } from '../../lib/components/core/Checkbox/meta'
import { DIVIDER_META } from '../../lib/components/core/Divider/meta'
import { HTML_TAG_META } from '../../lib/components/core/HtmlTag/meta'
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
import { SELECT_META } from '../../lib/components/core/Select/meta'
import { SLIDE_META } from '../../lib/components/core/Slide/meta'
import { SPACER_META } from '../../lib/components/core/Spacer/meta'
import { TABLE_META } from '../../lib/components/core/Table/meta'
import { TEXT_META } from '../../lib/components/core/Text/meta'
import { TEXTAREA_META } from '../../lib/components/core/Textarea/meta'
import { TITLE_META } from '../../lib/components/core/Title/meta'
import { AUTOCOMPLETE_META } from '../../lib/components/pro/Autocomplete/meta'
import { AVATAR_META } from '../../lib/components/pro/Avatar/meta'
import { BREADCRUMB_META } from '../../lib/components/pro/Breadcrumb/meta'
import { DIALOG_META } from '../../lib/components/pro/Dialog/meta'
import { FADE_META } from '../../lib/components/pro/Fade/meta'
import { FLOATING_META } from '../../lib/components/pro/Floating/meta'
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
  Floating: FLOATING_META,
  FocusTrap: FOCUS_TRAP_META,
  HtmlTag: HTML_TAG_META,
  IconButton: ICON_BUTTON_META,
  Icon: ICON_META,
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
  Portal: PORTAL_META,
  Resize: RESIZE_META,
  Reveal: REVEAL_META,
  Rotate: ROTATE_META,
  Scale: SCALE_META,
  Section: SECTION_META,
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
  Title: TITLE_META,
  Toolbar: TOOLBAR_META,
  Tooltip: TOOLTIP_META,
  VirtualList: VIRTUAL_LIST_META,
} as Record<string, Record<string, ComponentMeta<object>>>

export default META
