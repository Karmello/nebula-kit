import { PROPS_FROM_BOX } from 'lib/components/core/Box/playground'
import { PROPS_FROM_BUTTON } from 'lib/components/core/Button/playground'
import { PROPS_FROM_CALLOUT } from 'lib/components/core/Callout/playground'
import { PROPS_FROM_CHECKBOX } from 'lib/components/core/Checkbox/playground'
import { PROPS_FROM_ICON } from 'lib/components/core/Icon/playground'
import { PROPS_FROM_ICON_BUTTON } from 'lib/components/core/IconButton/playground'
import { PROPS_FROM_INPUT } from 'lib/components/core/Input/playground'
import { PROPS_FROM_LOADER } from 'lib/components/core/Loader/playground'
import { PROPS_FROM_REVEAL } from 'lib/components/core/Reveal/playground'
import { PROPS_FROM_SECTION } from 'lib/components/core/Section/playground'
import { PROPS_FROM_SELECT } from 'lib/components/core/Select/playground'
import { PROPS_FROM_TABLE } from 'lib/components/core/Table/playground'
import { PROPS_FROM_TEXT } from 'lib/components/core/Text/playground'
import { PROPS_FROM_TITLE } from 'lib/components/core/Title/playground'
import { PROPS_FROM_AVATAR } from 'lib/components/pro/Avatar/playground'
import { PROPS_FROM_SWITCH } from 'lib/components/pro/Switch/playground'
import { PROPS_FROM_TABS } from 'lib/components/pro/Tabs/playground'
import { PROPS_FROM_TOOLTIP } from 'lib/components/pro/Tooltip/playground'

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
  Title: PROPS_FROM_TITLE,
}
