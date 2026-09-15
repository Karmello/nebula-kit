import type { SplitViewMainBarProps } from 'lib/components/pro/SplitView/slots/SplitViewMainBar/types'
import { DocMeta } from 'client/definitions'

import { SPLIT_VIEW_MAIN_BAR_OVERVIEW } from './overview'
import { SPLIT_VIEW_MAIN_BAR_PROPS } from './props'

export const SPLIT_VIEW_MAIN_BAR_META = {
  overview: SPLIT_VIEW_MAIN_BAR_OVERVIEW,
  props: SPLIT_VIEW_MAIN_BAR_PROPS,
} satisfies DocMeta<SplitViewMainBarProps>
