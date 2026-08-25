import { DocMeta } from 'client/definitions'

import { APP_FRAME_META } from './AppFrame'
import { APP_FRAME_FOOTER_META } from './AppFrameFooter'
import { APP_FRAME_FOOTER_SECTION_META } from './AppFrameFooterSection'
import { APP_FRAME_HEADER_META } from './AppFrameHeader'
import { APP_FRAME_MAIN_META } from './AppFrameMain'
import { AUTOCOMPLETE_META } from './Autocomplete'
import { AUTOCOMPLETE_OPTION_META } from './AutocompleteOption'
import { AVATAR_META } from './Avatar'
import { BOX_META } from './Box'
import { BREADCRUMB_META } from './Breadcrumb'
import { BUTTON_META } from './Button'
import { CALLOUT_META } from './Callout'
import { CHECKBOX_META } from './Checkbox'
import { DIALOG_META } from './Dialog'
import { DIALOG_CONTENT_META } from './DialogContent'
import { DIALOG_FOOTER_META } from './DialogFooter'
import { DIALOG_HEADER_META } from './DialogHeader'
import { DIVIDER_META } from './Divider'
import { FADE_META } from './Fade'
import { FLOATING_META } from './Floating'
import { FLOATING_CONTENT_META } from './FloatingContent'
import { FLOATING_TRIGGER_META } from './FloatingTrigger'
import { FOCUS_TRAP_META } from './FocusTrap'
import { HTML_TAG_META } from './HtmlTag'
import { ICON_META } from './Icon'
import { ICON_BUTTON_META } from './IconButton'
import { IMAGE_META } from './Image'
import { INPUT_META } from './Input'
import { LINK_META } from './Link'
import { LOADER_META } from './Loader'
import { MARKER_LIST_META } from './MarkerList'
import { MARKER_LIST_ITEM_META } from './MarkerListItem'
import { MARKUP_META } from './Markup'
import { MULTI_SELECT_META } from './MultiSelect'
import { MULTI_SELECT_OPTION_META } from './MultiSelectOption'
import { NEBKIT_PROVIDER_META } from './NebkitProvider'
import { PAGINATION_META } from './Pagination'
import { PASSWORD_META } from './PasswordInput'
import { PORTAL_META } from './Portal'
import { RESIZE_META } from './Resize'
import { REVEAL_META } from './Reveal'
import { ROTATE_META } from './Rotate'
import { SCALE_META } from './Scale'
import { SECTION_META } from './Section'
import { SELECT_META } from './Select'
import { SELECT_OPTION_META } from './SelectOption'
import { SIDE_NAV_META } from './SideNav'
import { SIDE_NAV_CATEGORY_META } from './SideNavCategory'
import { SIDE_NAV_ITEM_META } from './SideNavItem'
import { SLIDE_META } from './Slide'
import { SNACKBAR_META, USE_SNACKBAR_META } from './Snackbar'
import { SPACER_META } from './Spacer'
import { SPLIT_VIEW_META } from './SplitView'
import { SPLIT_VIEW_MAIN_META } from './SplitViewMain'
import { SPLIT_VIEW_MAIN_BAR_META } from './SplitViewMainBar'
import { SPLIT_VIEW_SIDE_META } from './SplitViewSide'
import { SWITCH_META } from './Switch'
import { TABLE_META } from './Table'
import { TABLE_BODY_META } from './TableBody'
import { TABLE_CAPTION_META } from './TableCaption'
import { TABLE_CELL_META } from './TableCell'
import { TABLE_FOOTER_META } from './TableFooter'
import { TABLE_HEADER_META } from './TableHeader'
import { TABLE_HEADER_CELL_META } from './TableHeaderCell'
import { TABLE_HEADER_ROW_META } from './TableHeaderRow'
import { TABLE_ROW_META } from './TableRow'
import { TABS_META } from './Tabs'
import { TABS_PANEL_META } from './TabsPanel'
import { TABS_TAB_META } from './TabsTab'
import { TEXT_META } from './Text'
import { TEXTAREA_META } from './Textarea'
import { TITLE_META } from './Title'
import { TOOLBAR_META } from './Toolbar'
import { TOOLBAR_END_META } from './ToolbarEnd'
import { TOOLBAR_MAIN_META } from './ToolbarMain'
import { TOOLBAR_START_META } from './ToolbarStart'
import { TOOLTIP_META } from './Tooltip'
import { VIRTUAL_LIST_META } from './VirtualList'

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
  Avatar: {
    Avatar: AVATAR_META,
  },
  Box: {
    Box: BOX_META,
  },
  Breadcrumb: {
    Breadcrumb: BREADCRUMB_META,
  },
  Button: {
    Button: BUTTON_META,
  },
  Callout: {
    Callout: CALLOUT_META,
  },
  Checkbox: {
    Checkbox: CHECKBOX_META,
  },
  Dialog: {
    Dialog: DIALOG_META,
    DialogHeader: DIALOG_HEADER_META,
    DialogContent: DIALOG_CONTENT_META,
    DialogFooter: DIALOG_FOOTER_META,
  },
  Divider: {
    Divider: DIVIDER_META,
  },
  Fade: {
    Fade: FADE_META,
  },
  Floating: {
    Floating: FLOATING_META,
    FloatingTrigger: FLOATING_TRIGGER_META,
    FloatingContent: FLOATING_CONTENT_META,
  },
  FocusTrap: {
    FocusTrap: FOCUS_TRAP_META,
  },
  HtmlTag: {
    HtmlTag: HTML_TAG_META,
  },
  IconButton: {
    IconButton: ICON_BUTTON_META,
  },
  Icon: {
    Icon: ICON_META,
  },
  Image: {
    Image: IMAGE_META,
  },
  Input: {
    Input: INPUT_META,
  },
  Link: {
    Link: LINK_META,
  },
  Loader: {
    Loader: LOADER_META,
  },
  MarkerList: {
    MarkerList: MARKER_LIST_META,
    MarkerListItem: MARKER_LIST_ITEM_META,
  },
  Markup: {
    Markup: MARKUP_META,
  },
  MultiSelect: {
    MultiSelect: MULTI_SELECT_META,
    MultiSelectOption: MULTI_SELECT_OPTION_META,
  },
  NebkitProvider: {
    NebkitProvider: NEBKIT_PROVIDER_META,
  },
  Pagination: {
    Pagination: PAGINATION_META,
  },
  PasswordInput: {
    PasswordInput: PASSWORD_META,
  },
  Portal: {
    Portal: PORTAL_META,
  },
  Resize: {
    Resize: RESIZE_META,
  },
  Reveal: {
    Reveal: REVEAL_META,
  },
  Rotate: {
    Rotate: ROTATE_META,
  },
  Scale: {
    Scale: SCALE_META,
  },
  Section: {
    Section: SECTION_META,
  },
  Select: {
    Select: SELECT_META,
    SelectOption: SELECT_OPTION_META,
  },
  SideNav: {
    SideNav: SIDE_NAV_META,
    SideNavItem: SIDE_NAV_ITEM_META,
    SideNavCategory: SIDE_NAV_CATEGORY_META,
  },
  Slide: {
    Slide: SLIDE_META,
  },
  Snackbar: {
    Snackbar: SNACKBAR_META,
    useSnackbar: USE_SNACKBAR_META,
  },
  Spacer: {
    Spacer: SPACER_META,
  },
  SplitView: {
    SplitView: SPLIT_VIEW_META,
    SplitViewSide: SPLIT_VIEW_SIDE_META,
    SplitViewMain: SPLIT_VIEW_MAIN_META,
    SplitViewMainBar: SPLIT_VIEW_MAIN_BAR_META,
  },
  Switch: {
    Switch: SWITCH_META,
  },
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
  Text: {
    Text: TEXT_META,
  },
  Textarea: {
    Textarea: TEXTAREA_META,
  },
  Title: {
    Title: TITLE_META,
  },
  Toolbar: {
    Toolbar: TOOLBAR_META,
    ToolbarMain: TOOLBAR_MAIN_META,
    ToolbarStart: TOOLBAR_START_META,
    ToolbarEnd: TOOLBAR_END_META,
  },
  Tooltip: {
    Tooltip: TOOLTIP_META,
  },
  VirtualList: {
    VirtualList: VIRTUAL_LIST_META,
  },
} as Record<string, Record<string, DocMeta<object>>>

export default META
