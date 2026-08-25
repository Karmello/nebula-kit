import type { SplitViewSideProps } from 'lib/components/pro/SplitView/slots/SplitViewSide/types'
import { ComponentMeta } from 'client/definitions'

import { SPLIT_VIEW_SIDE_OVERVIEW } from './overview'
import { SPLIT_VIEW_SIDE_PROPS } from './props'

export const SPLIT_VIEW_SIDE_META = {
  overview: SPLIT_VIEW_SIDE_OVERVIEW,
  props: SPLIT_VIEW_SIDE_PROPS,
} satisfies ComponentMeta<SplitViewSideProps>
