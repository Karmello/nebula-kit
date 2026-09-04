import type { ToolbarStartProps } from 'lib/components/pro/Toolbar/slots/ToolbarStart/types'
import { DocMeta } from 'client/definitions'

import { TOOLBAR_START_OVERVIEW } from './overview'
import { TOOLBAR_START_PROPS } from './props'

export const TOOLBAR_START_META = {
  overview: TOOLBAR_START_OVERVIEW,
  props: TOOLBAR_START_PROPS,
} satisfies DocMeta<ToolbarStartProps>
