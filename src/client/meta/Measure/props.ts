import { ComponentMeta } from 'client/definitions'
import { MeasureProps } from 'lib/components'

import { BOX_PROPS_META } from '../Box/props'

const MEASURE_PROPS_META: ComponentMeta<MeasureProps>['props'] = {
  children: {
    ...BOX_PROPS_META.children,
    isRequired: true,
  },
  onMeasure: {
    options: ['({ blockSize, inlineSize }) => void'],
    isRequired: true,
    description:
      'Callback invoked when the rendered size of the content is measured or changes. Receives the current block and inline size in pixels.',
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
}

export { MEASURE_PROPS_META }
