import { ComponentMeta } from 'client/definitions'
import { LoaderProps } from 'lib/components'
import {
  DEFAULT_LOADER_ACTIVE,
  DEFAULT_LOADER_SIZE,
  LOADER_SIZES,
} from 'lib/components/feedback/Loader/definitions'

import { BOX_PROPS_META } from '../Box/props'
import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const LOADER_PROPS_META: ComponentMeta<LoaderProps>['props'] = {
  active: {
    options: ['boolean'],
    defaultValue: String(DEFAULT_LOADER_ACTIVE),
    description:
      'Controls whether the Loader is visible. Pass a boolean to show or hide the component without having to wrap it in your own conditional render logic.',
  },
  centered: {
    options: ['boolean'],
    defaultValue: 'false',
    description:
      'Absolutely centers the loader in both axes. Wrap it with an element with "position" set to "relative" to define the centering context.',
  },
  color: BOX_PROPS_META.color,
  size: {
    options: LOADER_SIZES,
    defaultValue: String(DEFAULT_LOADER_SIZE),
    description: 'Controls the diameter of the loader.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
}

export { LOADER_PROPS_META }
