import { BreadcrumbProps } from 'lib/index.pro'
import { DocMeta } from 'client/definitions'

import { BREADCRUMB_CHANGELOG } from './changelog'
import { BREADCRUMB_EXAMPLES } from './examples'
import { BREADCRUMB_OVERVIEW } from './overview'
import { BREADCRUMB_PROPS } from './props'

export const BREADCRUMB_META = {
  overview: BREADCRUMB_OVERVIEW,
  props: BREADCRUMB_PROPS,
  examples: BREADCRUMB_EXAMPLES,
  changelog: BREADCRUMB_CHANGELOG,
} satisfies DocMeta<BreadcrumbProps>
