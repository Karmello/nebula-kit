import { useState } from 'react'

import { BOX_META } from 'lib/components/core/Box/meta'
import { ComponentMeta } from 'client/definitions'

import { Box } from '../../core/Box'
import { Button } from '../../core/Button'
import {
  DEFAULT_SCALE_AXIS,
  DEFAULT_SCALE_DURATION,
  DEFAULT_SCALE_EASING,
  DEFAULT_SCALE_FROM,
  DEFAULT_SCALE_ORIGIN,
  DEFAULT_SCALE_TO,
  Scale,
} from '../Scale'
import { SCALE_AXIS, SCALE_ORIGIN, type ScaleProps } from './definitions'

const Example1 = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Button onClick={() => setVisible(value => !value)}>Toggle scale</Button>
      <Scale visible={visible}>
        <Box drawable variant="solid" intent="primary" padding="md">
          Scaled content
        </Box>
      </Scale>
    </>
  )
}

export const SCALE_META = {
  Scale: {
    overview: {
      bundle: 'pro',
      title: 'Motion component for animating visual scale transitions.',
      description:
        'Scale applies transform-based motion that visually scales content between hidden and visible states. It can scale on both axes or a single axis, making it useful for dialogs, dropdowns, popovers, menus and floating UI surfaces.',
      features: [
        'animates visibility using CSS transform scale',
        'performs visual-only motion without affecting layout',
        'supports configurable scale values for hidden and visible states',
        'supports both-axis and single-axis scale transitions',
        'supports configurable transform origins for directional scaling behavior',
      ],
    },
    props: {
      axis: {
        options: SCALE_AXIS,
        defaultValue: DEFAULT_SCALE_AXIS,
        description: 'Defines which axis the content scales on during the transition.',
      },
      children: {
        ...BOX_META.Box.props.children,
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
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
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
    },
    examples: [
      {
        description: 'Scale transition controlled by `visible` prop.',
        jsx: <Example1 />,
        code: `<Scale visible={visible}>
  <Box drawable variant="solid" intent="primary" padding="md" marginLeft="sm">
    Scaled content
  </Box>
</Scale>`,
      },
    ],
    changelog: {
      '0.11.0': ['released'],
    },
  } as ComponentMeta<ScaleProps>,
}
