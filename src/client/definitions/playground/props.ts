import { PROPS_FROM_AVATAR } from './components/avatar'
import { PROPS_FROM_BOX } from './components/box'
import { PROPS_FROM_BUTTON } from './components/button'
import { PROPS_FROM_CALLOUT } from './components/callout'
import { PROPS_FROM_CHECKBOX } from './components/checkbox'
import { PROPS_FROM_ICON } from './components/icon'
import { PROPS_FROM_ICON_BUTTON } from './components/icon-button'
import { PROPS_FROM_INPUT } from './components/input'
import { PROPS_FROM_LOADER } from './components/loader'
import { PROPS_FROM_REVEAL } from './components/reveal'
import { PROPS_FROM_SECTION } from './components/section'
import { PROPS_FROM_SELECT } from './components/select'
import { PROPS_FROM_SWITCH } from './components/switch'
import { PROPS_FROM_TABLE } from './components/table'
import { PROPS_FROM_TABS } from './components/tabs'
import { PROPS_FROM_TEXT } from './components/text'
import { PROPS_FROM_TOOLTIP } from './components/tooltip'
import { PROPS_FROM_WITH_ICON } from './components/with-icon'

export const PLAYGROUND_PROPS_MAP: Record<string, readonly string[]> = {
  Avatar: PROPS_FROM_AVATAR,
  Box: PROPS_FROM_BOX,
  Button: PROPS_FROM_BUTTON,
  Callout: PROPS_FROM_CALLOUT,
  Checkbox: PROPS_FROM_CHECKBOX,
  Icon: PROPS_FROM_ICON,
  IconButton: PROPS_FROM_ICON_BUTTON,
  Input: PROPS_FROM_INPUT,
  Loader: PROPS_FROM_LOADER,
  Reveal: PROPS_FROM_REVEAL,
  Section: PROPS_FROM_SECTION,
  Select: PROPS_FROM_SELECT,
  Switch: PROPS_FROM_SWITCH,
  Tabs: PROPS_FROM_TABS,
  Table: PROPS_FROM_TABLE,
  Text: PROPS_FROM_TEXT,
  Tooltip: PROPS_FROM_TOOLTIP,
  WithIcon: PROPS_FROM_WITH_ICON,
}
