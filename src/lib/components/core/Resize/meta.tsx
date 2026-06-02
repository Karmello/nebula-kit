import { useEffect, useState } from 'react'

import { Resize, ResizeProps, Text } from 'lib/index.core'
import { ComponentMeta, DOCS_CSS_LABEL } from 'client/definitions'

import { BOX_META } from '../Box/meta'
import { RESIZE_PROPERTIES } from './definitions'
import { DEFAULT_RESIZE_DURATION, DEFAULT_RESIZE_EASING } from './resize'

const ResizeWrapper = ({ property }: { property: ResizeProps['property'] }) => {
  const [visible, setVisible] = useState<boolean>(false)
  let interval: NodeJS.Timeout | null = null

  useEffect(() => {
    setVisible(true)
  }, [])

  useEffect(() => {
    interval = setInterval(() => {
      setVisible(!visible)
    }, 1000)

    return () => {
      clearInterval(interval)
      interval = null
    }
  }, [visible])

  return (
    <Resize visible={visible} property={property} duration={1000}>
      <Text noWrap>Animated content.</Text>
    </Resize>
  )
}

export const RESIZE_META = {
  Resize: {
    overview: {
      bundle: 'core',
      title: 'Motion component for animating layout size.',
      description:
        'Resize animates layout-affecting expand and collapse motion by measuring content and transitioning block or inline size.',
      features: [
        'animates block or inline size using measured content dimensions',
        'supports expand and collapse motion for panels, accordions and content reveals',
        'keeps layout motion explicit without hard-coded sizes',
      ],
      composedOf: ['Box'],
      topLevelTags: ['div'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
        description: 'Content animated.',
      },
      duration: {
        options: ['number'],
        defaultValue: String(DEFAULT_RESIZE_DURATION),
        description: 'Animation duration in milliseconds.',
      },
      easing: {
        options: [DOCS_CSS_LABEL],
        defaultValue: DEFAULT_RESIZE_EASING,
        description: 'Timing function for the animation.',
      },
      property: {
        options: RESIZE_PROPERTIES,
        isRequired: true,
        description: 'Property to animate (logical size only).',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      visible: {
        options: ['boolean'],
        isRequired: true,
        description: 'Toggles the visibility of the content.',
      },
    },
    examples: [
      {
        description: 'Animating the inlineSize property.',
        jsx: <ResizeWrapper property="inlineSize" />,
        code: `<Resize visible={visible} property="inlineSize" duration={1000}>
  <Text noWrap>Animated content.</Text>
</Resize>`,
        sandBoxWithNoPadding: true,
      },
      {
        description: 'Animating the blockSize property.',
        jsx: <ResizeWrapper property="blockSize" />,
        code: `<Resize visible={visible} property="blockSize" duration={1000}>
  <Text noWrap>Animated content.</Text>
</Resize>`,
        sandBoxWithNoPadding: true,
      },
    ],
    changelog: {
      '0.2.3': ['released'],
    },
  } as ComponentMeta<ResizeProps>,
}
