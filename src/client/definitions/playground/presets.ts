import { AVATAR_PRESETS } from './components/avatar'
import { BOX_PRESETS } from './components/box'
import { BUTTON_PRESETS } from './components/button'
import { CALLOUT_PRESETS } from './components/callout'
import { CHECKBOX_PRESETS } from './components/checkbox'
import { ICON_PRESETS } from './components/icon'
import { ICON_BUTTON_PRESETS } from './components/icon-button'
import { INPUT_PRESETS } from './components/input'
import { LOADER_PRESETS } from './components/loader'
import { REVEAL_PRESETS } from './components/reveal'
import { SECTION_PRESETS } from './components/section'
import { SELECT_PRESETS } from './components/select'
import { SWITCH_PRESETS } from './components/switch'
import { TABLE_PRESETS } from './components/table'
import { TABS_PRESETS } from './components/tabs'
import { TEXT_PRESETS } from './components/text'
import { TOOLTIP_PRESETS } from './components/tooltip'
import { WITH_ICON_PRESETS } from './components/with-icon'

export const PLAYGROUND_PRESETS: Record<string, Array<{ name: string; props: object }>> = {
  Avatar: AVATAR_PRESETS,
  Box: BOX_PRESETS,
  Button: BUTTON_PRESETS,
  Callout: CALLOUT_PRESETS,
  Checkbox: CHECKBOX_PRESETS,
  IconButton: ICON_BUTTON_PRESETS,
  Icon: ICON_PRESETS,
  Input: INPUT_PRESETS,
  Loader: LOADER_PRESETS,
  Reveal: REVEAL_PRESETS,
  Section: SECTION_PRESETS,
  Select: SELECT_PRESETS,
  Switch: SWITCH_PRESETS,
  Table: TABLE_PRESETS,
  Tabs: TABS_PRESETS,
  Text: TEXT_PRESETS,
  Tooltip: TOOLTIP_PRESETS,
  WithIcon: WITH_ICON_PRESETS,
}
