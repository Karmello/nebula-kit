import { ComponentMeta } from 'client/definitions'

import { type ScaleProps, SCALE_AXIS, SCALE_ORIGIN } from '../definitions'

import {
  DEFAULT_SCALE_AXIS,
  DEFAULT_SCALE_DURATION,
  DEFAULT_SCALE_EASING,
  DEFAULT_SCALE_FROM,
  DEFAULT_SCALE_ORIGIN,
  DEFAULT_SCALE_TO,
} from '../'

import { BOX_PROPS_META } from '../../../core/Box/meta/props'

const SCALE_PROPS_META: ComponentMeta<ScaleProps>['props'] = {
  axis: {
    options: SCALE_AXIS,
    defaultValue: DEFAULT_SCALE_AXIS,
    description: 'Defines which axis the content scales on during the transition.',
  },
  children: {
    ...BOX_PROPS_META.children,
    isRequired: true,
  },
  duration: {
    options: ['number'],
    defaultValue: String(DEFAULT_SCALE_DURATION),
    description: 'Duration of the scale transition in milliseconds.',
  },
  easing: {
    options: ['string'],
    defaultValue: DEFAULT_SCALE_EASING,
    description: 'Defines the CSS easing function used for the scale transition.',
  },
  from: {
    options: ['number'],
    defaultValue: String(DEFAULT_SCALE_FROM),
    description: 'Defines the scale value used when the content is hidden.',
  },
  origin: {
    options: SCALE_ORIGIN,
    defaultValue: DEFAULT_SCALE_ORIGIN,
    description:
      'Defines the transform origin used for the scale transition. Controls the point from which the content visually scales.',
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  to: {
    options: ['number'],
    defaultValue: String(DEFAULT_SCALE_TO),
    description: 'Defines the scale value used when the content is visible.',
  },
  visible: {
    options: ['boolean'],
    isRequired: true,
    description:
      'Controls whether the content is rendered in its visible or hidden visual state. Triggers enter and exit scale transitions.',
  },
}

export { SCALE_PROPS_META }
