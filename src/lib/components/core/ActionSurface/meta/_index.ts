import { ComponentMeta } from 'client/definitions'

import { type ActionSurfaceProps, ACTION_SURFACE_TAGS } from '../definitions'
import { ACTION_SURFACE_PROPS_META } from './props'
import { ACTION_SURFACE_EXAMPLES_META } from './examples'

const ACTION_SURFACE_META: ComponentMeta<ActionSurfaceProps> = {
  overview: {
    bundle: 'core',
    title: 'Foundational interaction surface component for building custom clickable UI.',
    description:
      'ActionSurface is a foundational interaction surface component that turns custom content into a clickable, focusable surface with consistent disabled, selected, ripple and visual interaction behavior.',
    features: [
      'renders arbitrary children inside an interactive surface',
      'provides consistent hover, active, focus, disabled and selected visual states',
      'supports semantic button, anchor and custom interaction surfaces',
      'adds ripple feedback without imposing button-specific layout, typography or sizing',
      'intended for building custom interactive components without reusing Button',
    ],
    composedOf: ['Box'],
    topLevelTags: ACTION_SURFACE_TAGS,
  },
  props: ACTION_SURFACE_PROPS_META,
  examples: ACTION_SURFACE_EXAMPLES_META,
  changelog: {
    '0.11.0': ['released'],
  },
}

export default {
  ActionSurface: ACTION_SURFACE_META,
}
