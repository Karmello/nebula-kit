import type { BoxGroupItemProps } from 'lib/components/core/BoxGroup/slots/BoxGroupItem/types'
import { DocMeta } from 'client/definitions'

import { BOX_GROUP_ITEM_OVERVIEW } from './overview'
import { BOX_GROUP_ITEM_PROPS } from './props'

export const BOX_GROUP_ITEM_META = {
  overview: BOX_GROUP_ITEM_OVERVIEW,
  props: BOX_GROUP_ITEM_PROPS,
} satisfies DocMeta<BoxGroupItemProps>
