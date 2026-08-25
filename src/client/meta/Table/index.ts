import { TableProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { TABLE_CHANGELOG } from './changelog'
import { TABLE_EXAMPLES } from './examples'
import { TABLE_OVERVIEW } from './overview'
import { TABLE_PROPS } from './props'

export const TABLE_META = {
  overview: TABLE_OVERVIEW,
  props: TABLE_PROPS,
  examples: TABLE_EXAMPLES,
  changelog: TABLE_CHANGELOG,
} satisfies ComponentMeta<TableProps>
