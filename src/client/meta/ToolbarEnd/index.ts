import type { ToolbarEndProps } from 'lib/components/pro/Toolbar/slots/ToolbarEnd/types'
import { ComponentMeta } from 'client/definitions'

import { TOOLBAR_END_OVERVIEW } from './overview'
import { TOOLBAR_END_PROPS } from './props'

export const TOOLBAR_END_META = {
  overview: TOOLBAR_END_OVERVIEW,
  props: TOOLBAR_END_PROPS,
} satisfies ComponentMeta<ToolbarEndProps>
