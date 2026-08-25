import { PaginationProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { PAGINATION_CHANGELOG } from './changelog'
import { PAGINATION_EXAMPLES } from './examples'
import { PAGINATION_OVERVIEW } from './overview'
import { PAGINATION_PROPS } from './props'

export const PAGINATION_META = {
  overview: PAGINATION_OVERVIEW,
  props: PAGINATION_PROPS,
  examples: PAGINATION_EXAMPLES,
  changelog: PAGINATION_CHANGELOG,
} satisfies ComponentMeta<PaginationProps>
