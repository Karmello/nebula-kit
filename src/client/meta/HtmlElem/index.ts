import { ElementType } from 'react'

import { HtmlElemProps } from 'lib/components'
import { DocMeta } from 'client/definitions'

import { HTML_ELEM_CHANGELOG } from './changelog'
import { HTML_ELEM_EXAMPLES } from './examples'
import { HTML_ELEM_OVERVIEW } from './overview'
import { HTML_ELEM_PROPS } from './props'

export const HTML_ELEM_META = {
  overview: HTML_ELEM_OVERVIEW,
  props: HTML_ELEM_PROPS,
  examples: HTML_ELEM_EXAMPLES,
  hideExamplesThemeToggle: true,
  changelog: HTML_ELEM_CHANGELOG,
} satisfies DocMeta<HtmlElemProps<ElementType>>
