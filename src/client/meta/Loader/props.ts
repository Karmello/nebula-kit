import { ComponentMeta } from 'client/definitions'
import { LoaderProps } from 'lib/components'
import { DEFAULT_LOADER_SIZE, LOADER_SIZES } from 'lib/components/feedback/Loader/definitions'

import { BOX_PROPS_META } from '../Box/props'
import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const LOADER_PROPS_META: ComponentMeta<LoaderProps>['props'] = {
  centered: {
    options: ['boolean'],
    defaultValue: 'false',
    description:
      'Absolutely centers the loader in both axes. Requires a parent with position set to relative.',
  },
  color: BOX_PROPS_META.color,
  intent: BOX_PROPS_META.intent,
  size: {
    options: LOADER_SIZES,
    defaultValue: String(DEFAULT_LOADER_SIZE),
    description: 'Controls the diameter of the loader.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
}

export { LOADER_PROPS_META }
