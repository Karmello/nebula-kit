import { useEffect, useState } from 'react'

import { Rotate, RotateProps, Text } from 'lib/index.core'
import { ComponentMeta, DOCS_CSS_LABEL } from 'client/definitions'

import { BOX_META } from '../Box/meta'
import { DEFAULT_ROTATE_DURATION, DEFAULT_ROTATE_EASING } from './rotate'

const RotateWrapper = ({ children }: Partial<RotateProps>) => {
  const [angle, setAngle] = useState<number>(0)
  let interval: NodeJS.Timeout | null = null

  useEffect(() => {
    interval = setInterval(() => {
      setAngle(angle => (angle += 90))
    }, 1000)

    return () => {
      clearInterval(interval)
      interval = null
    }
  }, [])

  return <Rotate angle={angle}>{children}</Rotate>
}

export const ROTATE_META = {
  Rotate: {
    overview: {
      bundle: 'core',
      title: 'Motion component for animating rotation.',
      description:
        'Rotate applies transform-based rotation motion by animating changes to the provided angle value. It is intended for lightweight visual motion such as icons, indicators and directional state changes.',
      features: [
        'animates rotation using CSS transforms',
        'reacts to angle changes with smooth visual motion',
        'uses transform-based animation without affecting layou',
        'works well for icons, toggles and directional indicators',
      ],
      composedOf: ['Box'],
      topLevelTags: ['span'],
    },
    props: {
      angle: {
        options: ['number'],
        isRequired: true,
        description: 'Rotation angle of the content in degrees. Changing the value triggers a rotation animation.',
      },
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
        description: 'Content being rotated.',
      },
      duration: {
        options: ['number'],
        defaultValue: String(DEFAULT_ROTATE_DURATION),
        description: 'Animation duration in milliseconds.',
      },
      easing: {
        options: [DOCS_CSS_LABEL],
        defaultValue: DEFAULT_ROTATE_EASING,
        description: 'Timing function for the animation.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
    examples: [
      {
        description: 'Rotation is triggered by changing the value of the angle prop.',
        jsx: (
          <RotateWrapper>
            <Text>Text</Text>
          </RotateWrapper>
        ),
        code: `<Rotate angle={angle}>
  <Text>Text</Text>
</Rotate>`,
      },
    ],
    changelog: {
      '0.2.3': ['released'],
    },
  } satisfies ComponentMeta<RotateProps>,
}
