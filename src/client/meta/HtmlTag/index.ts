import { ElementType } from 'react'

import { HtmlTagProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { HTML_TAG_CHANGELOG } from './changelog'
import { HTML_TAG_EXAMPLES } from './examples'
import { HTML_TAG_OVERVIEW } from './overview'
import { HTML_TAG_PROPS } from './props'

export const HTML_TAG_META = {
  overview: HTML_TAG_OVERVIEW,
  props: HTML_TAG_PROPS,
  examples: HTML_TAG_EXAMPLES,
  hideExamplesThemeToggle: true,
  changelog: HTML_TAG_CHANGELOG,
} satisfies ComponentMeta<HtmlTagProps<ElementType>>
