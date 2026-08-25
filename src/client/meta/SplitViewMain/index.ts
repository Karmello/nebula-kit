import type { SplitViewMainProps } from 'lib/components/pro/SplitView/slots/SplitViewMain/types'
import { ComponentMeta } from 'client/definitions'

import { SPLIT_VIEW_MAIN_OVERVIEW } from './overview'
import { SPLIT_VIEW_MAIN_PROPS } from './props'

export const SPLIT_VIEW_MAIN_META = {
  overview: SPLIT_VIEW_MAIN_OVERVIEW,
  props: SPLIT_VIEW_MAIN_PROPS,
} satisfies ComponentMeta<SplitViewMainProps>
