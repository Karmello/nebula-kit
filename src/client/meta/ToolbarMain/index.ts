import type { ToolbarMainProps } from 'lib/components/pro/Toolbar/slots/ToolbarMain/types'
import { ComponentMeta } from 'client/definitions'

import { TOOLBAR_MAIN_OVERVIEW } from './overview'
import { TOOLBAR_MAIN_PROPS } from './props'

export const TOOLBAR_MAIN_META = {
  overview: TOOLBAR_MAIN_OVERVIEW,
  props: TOOLBAR_MAIN_PROPS,
} satisfies ComponentMeta<ToolbarMainProps>
