import { AVATAR_PRESETS } from 'lib/components/pro/Avatar/playground'
import { BOX_PRESETS } from 'lib/components/core/Box/playground'
import { BUTTON_PRESETS } from 'lib/components/core/Button/playground'
import { CALLOUT_PRESETS } from 'lib/components/core/Callout/playground'
import { CHECKBOX_PRESETS } from 'lib/components/core/Checkbox/playground'
import { ICON_BUTTON_PRESETS } from 'lib/components/core/IconButton/playground'
import { ICON_PRESETS } from 'lib/components/core/Icon/playground'
import { INPUT_PRESETS } from 'lib/components/core/Input/playground'
import { LOADER_PRESETS } from 'lib/components/core/Loader/playground'
import { REVEAL_PRESETS } from 'lib/components/core/Reveal/playground'
import { SECTION_PRESETS } from 'lib/components/core/Section/playground'
import { SELECT_PRESETS } from 'lib/components/core/Select/playground'
import { SWITCH_PRESETS } from 'lib/components/pro/Switch/playground'
import { TABLE_PRESETS } from 'lib/components/core/Table/playground'
import { TABS_PRESETS } from 'lib/components/pro/Tabs/playground'
import { TEXT_PRESETS } from 'lib/components/core/Text/playground'
import { TOOLTIP_PRESETS } from 'lib/components/pro/Tooltip/playground'
import { WITH_ICON_PRESETS } from 'lib/components/core/WithIcon/playground'

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
