import { FOCUS_TRAP_META } from 'lib/components/pro/FocusTrap/meta'
import { PORTAL_META } from 'lib/components/pro/Portal/meta'
import { ComponentMeta } from 'client/definitions'

import { APP_FRAME_META } from '../../lib/components/core/AppFrame/meta'
import { APP_FRAME_FOOTER_META } from '../../lib/components/core/AppFrame/slots/AppFrameFooter/meta'
import { APP_FRAME_FOOTER_SECTION_META } from '../../lib/components/core/AppFrame/slots/AppFrameFooterSection/meta'
import { APP_FRAME_HEADER_META } from '../../lib/components/core/AppFrame/slots/AppFrameHeader/meta'
import { APP_FRAME_MAIN_META } from '../../lib/components/core/AppFrame/slots/AppFrameMain/meta'
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
import { MARKER_LIST_ITEM_META } from '../../lib/components/core/MarkerList/slots/MarkerListItem/meta'
import { NEBKIT_PROVIDER_META } from '../../lib/components/core/NebkitProvider/meta'
import { RESIZE_META } from '../../lib/components/core/Resize/meta'
import { REVEAL_META } from '../../lib/components/core/Reveal/meta'
import { ROTATE_META } from '../../lib/components/core/Rotate/meta'
import { SECTION_META } from '../../lib/components/core/Section/meta'
import { SELECT_META } from '../../lib/components/core/Select/meta'
import { SELECT_OPTION_META } from '../../lib/components/core/Select/slots/SelectOption/meta'
import { SLIDE_META } from '../../lib/components/core/Slide/meta'
import { SPACER_META } from '../../lib/components/core/Spacer/meta'
import { TABLE_META } from '../../lib/components/core/Table/meta'
import { TABLE_BODY_META } from '../../lib/components/core/Table/slots/TableBody/meta'
import { TABLE_CAPTION_META } from '../../lib/components/core/Table/slots/TableCaption/meta'
import { TABLE_CELL_META } from '../../lib/components/core/Table/slots/TableCell/meta'
import { TABLE_FOOTER_META } from '../../lib/components/core/Table/slots/TableFooter/meta'
import { TABLE_HEADER_META } from '../../lib/components/core/Table/slots/TableHeader/meta'
import { TABLE_HEADER_CELL_META } from '../../lib/components/core/Table/slots/TableHeaderCell/meta'
import { TABLE_HEADER_ROW_META } from '../../lib/components/core/Table/slots/TableHeaderRow/meta'
import { TABLE_ROW_META } from '../../lib/components/core/Table/slots/TableRow/meta'
import { TEXT_META } from '../../lib/components/core/Text/meta'
import { TEXTAREA_META } from '../../lib/components/core/Textarea/meta'
import { TITLE_META } from '../../lib/components/core/Title/meta'
import { AUTOCOMPLETE_META } from '../../lib/components/pro/Autocomplete/meta'
import { AUTOCOMPLETE_OPTION_META } from '../../lib/components/pro/Autocomplete/slots/AutocompleteOption/meta'
import { AVATAR_META } from '../../lib/components/pro/Avatar/meta'
import { BREADCRUMB_META } from '../../lib/components/pro/Breadcrumb/meta'
import { DIALOG_META } from '../../lib/components/pro/Dialog/meta'
import { DIALOG_CONTENT_META } from '../../lib/components/pro/Dialog/slots/DialogContent/meta'
import { DIALOG_FOOTER_META } from '../../lib/components/pro/Dialog/slots/DialogFooter/meta'
import { DIALOG_HEADER_META } from '../../lib/components/pro/Dialog/slots/DialogHeader/meta'
import { FADE_META } from '../../lib/components/pro/Fade/meta'
import { FLOATING_META } from '../../lib/components/pro/Floating/meta'
import { FLOATING_CONTENT_META } from '../../lib/components/pro/Floating/slots/FloatingContent/meta'
import { FLOATING_TRIGGER_META } from '../../lib/components/pro/Floating/slots/FloatingTrigger/meta'
import { MARKUP_META } from '../../lib/components/pro/Markup/meta'
import { MULTI_SELECT_META } from '../../lib/components/pro/MultiSelect/meta'
import { MULTI_SELECT_OPTION_META } from '../../lib/components/pro/MultiSelect/slots/MultiSelectOption/meta'
import { PAGINATION_META } from '../../lib/components/pro/Pagination/meta'
import { PASSWORD_META } from '../../lib/components/pro/PasswordInput/meta'
import { SCALE_META } from '../../lib/components/pro/Scale/meta'
import { SIDE_NAV_META } from '../../lib/components/pro/SideNav/meta'
import { SIDE_NAV_CATEGORY_META } from '../../lib/components/pro/SideNav/slots/SideNavCategory/meta'
import { SIDE_NAV_ITEM_META } from '../../lib/components/pro/SideNav/slots/SideNavItem/meta'
import { SNACKBAR_META } from '../../lib/components/pro/Snackbar/meta'
import { SPLIT_VIEW_META } from '../../lib/components/pro/SplitView/meta'
import { SPLIT_VIEW_MAIN_META } from '../../lib/components/pro/SplitView/slots/SplitViewMain/meta'
import { SPLIT_VIEW_MAIN_BAR_META } from '../../lib/components/pro/SplitView/slots/SplitViewMainBar/meta'
import { SPLIT_VIEW_SIDE_META } from '../../lib/components/pro/SplitView/slots/SplitViewSide/meta'
import { SWITCH_META } from '../../lib/components/pro/Switch/meta'
import { TABS_META } from '../../lib/components/pro/Tabs/meta'
import { TABS_PANEL_META } from '../../lib/components/pro/Tabs/slots/TabsPanel/meta'
import { TABS_TAB_META } from '../../lib/components/pro/Tabs/slots/TabsTab/meta'
import { TOOLBAR_META } from '../../lib/components/pro/Toolbar/meta'
import { TOOLBAR_END_META } from '../../lib/components/pro/Toolbar/slots/ToolbarEnd/meta'
import { TOOLBAR_MAIN_META } from '../../lib/components/pro/Toolbar/slots/ToolbarMain/meta'
import { TOOLBAR_START_META } from '../../lib/components/pro/Toolbar/slots/ToolbarStart/meta'
import { TOOLTIP_META } from '../../lib/components/pro/Tooltip/meta'
import { VIRTUAL_LIST_META } from '../../lib/components/pro/VirtualList/meta'

const META = {
  AppFrame: {
    AppFrame: APP_FRAME_META,
    AppFrameHeader: APP_FRAME_HEADER_META,
    AppFrameMain: APP_FRAME_MAIN_META,
    AppFrameFooter: APP_FRAME_FOOTER_META,
    AppFrameFooterSection: APP_FRAME_FOOTER_SECTION_META,
  },
  Autocomplete: {
    Autocomplete: AUTOCOMPLETE_META,
    AutocompleteOption: AUTOCOMPLETE_OPTION_META,
  },
  Avatar: AVATAR_META,
  Box: BOX_META,
  Breadcrumb: BREADCRUMB_META,
  Button: BUTTON_META,
  Callout: CALLOUT_META,
  Checkbox: CHECKBOX_META,
  Dialog: {
    Dialog: DIALOG_META,
    DialogHeader: DIALOG_HEADER_META,
    DialogContent: DIALOG_CONTENT_META,
    DialogFooter: DIALOG_FOOTER_META,
  },
  Divider: DIVIDER_META,
  Fade: FADE_META,
  Floating: {
    Floating: FLOATING_META,
    FloatingTrigger: FLOATING_TRIGGER_META,
    FloatingContent: FLOATING_CONTENT_META,
  },
  FocusTrap: FOCUS_TRAP_META,
  HtmlTag: HTML_TAG_META,
  IconButton: ICON_BUTTON_META,
  Icon: ICON_META,
  Image: IMAGE_META,
  Input: INPUT_META,
  Link: LINK_META,
  Loader: LOADER_META,
  MarkerList: {
    MarkerList: MARKER_LIST_META,
    MarkerListItem: MARKER_LIST_ITEM_META,
  },
  Markup: MARKUP_META,
  MultiSelect: {
    MultiSelect: MULTI_SELECT_META,
    MultiSelectOption: MULTI_SELECT_OPTION_META,
  },
  NebkitProvider: NEBKIT_PROVIDER_META,
  Pagination: PAGINATION_META,
  PasswordInput: PASSWORD_META,
  Portal: PORTAL_META,
  Resize: RESIZE_META,
  Reveal: REVEAL_META,
  Rotate: ROTATE_META,
  Scale: SCALE_META,
  Section: SECTION_META,
  Select: {
    Select: SELECT_META,
    SelectOption: SELECT_OPTION_META,
  },
  SideNav: {
    SideNav: SIDE_NAV_META,
    SideNavItem: SIDE_NAV_ITEM_META,
    SideNavCategory: SIDE_NAV_CATEGORY_META,
  },
  Slide: SLIDE_META,
  Snackbar: SNACKBAR_META,
  Spacer: SPACER_META,
  SplitView: {
    SplitView: SPLIT_VIEW_META,
    SplitViewSide: SPLIT_VIEW_SIDE_META,
    SplitViewMain: SPLIT_VIEW_MAIN_META,
    SplitViewMainBar: SPLIT_VIEW_MAIN_BAR_META,
  },
  Switch: SWITCH_META,
  Table: {
    Table: TABLE_META,
    TableBody: TABLE_BODY_META,
    TableHeader: TABLE_HEADER_META,
    TableFooter: TABLE_FOOTER_META,
    TableCaption: TABLE_CAPTION_META,
    TableRow: TABLE_ROW_META,
    TableHeaderRow: TABLE_HEADER_ROW_META,
    TableCell: TABLE_CELL_META,
    TableHeaderCell: TABLE_HEADER_CELL_META,
  },
  Tabs: {
    Tabs: TABS_META,
    TabsTab: TABS_TAB_META,
    TabsPanel: TABS_PANEL_META,
  },
  Text: TEXT_META,
  Textarea: TEXTAREA_META,
  Title: TITLE_META,
  Toolbar: {
    Toolbar: TOOLBAR_META,
    ToolbarMain: TOOLBAR_MAIN_META,
    ToolbarStart: TOOLBAR_START_META,
    ToolbarEnd: TOOLBAR_END_META,
  },
  Tooltip: TOOLTIP_META,
  VirtualList: VIRTUAL_LIST_META,
} as Record<string, Record<string, ComponentMeta<object>>>

export default META
