import { MeasureProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { MEASURE_PROPS_META } from './props'
import { MEASURE_EXAMPLES_META } from './examples'

const MEASURE_META: ComponentMeta<MeasureProps> = {
  overview: {
    bundle: 'pro',
    title: 'Utility component that renders content invisibly to determine its rendered size.',
    features: [
      'measures the rendered block and inline size of its content',
      'renders its children invisibly while still participating in layout',
      'performs measurement after layout using "useLayoutEffect", ensuring size values are accurate before visual updates occur',
      'reports size changes via a callback without enforcing any layout or styles',
      'respects theme, brand and CSS context of where it is rendered',
      'reacts to dynamic size changes using ResizeObserver',
      'does not affect visibility, interaction or document flow',
    ],
    composedOf: ['Box'],
  },
  props: MEASURE_PROPS_META,
  examples: MEASURE_EXAMPLES_META,
  hideExamplesThemeToggle: true,
  changelog: {
    '0.3.0': ['released'],
  },
}

export default {
  Measure: MEASURE_META,
}
