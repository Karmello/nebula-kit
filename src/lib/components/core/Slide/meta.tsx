import { cloneElement, ReactElement, useEffect, useState } from 'react'

import { Flex, Slide, SlideProps, Text } from 'lib/index.core'
import { ComponentMeta, DOCS_CSS_LABEL } from 'client/definitions'

import { Box } from '../Box'
import { BOX_META } from '../Box/meta'
import { SLIDE_FROM } from './definitions'
import { DEFAULT_SLIDE_DURATION, DEFAULT_SLIDE_EASING } from './slide'

const SlideWrapper = ({ children }: { children: ReactElement }) => {
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

  return cloneElement(children as any, { visible })
}

export const SLIDE_META = {
  Slide: {
    overview: {
      bundle: 'core',
      title: 'Motion component for animating directional slide transitions.',
      description:
        'Slide applies transform-based motion that moves content into and out of view from a chosen direction. It is intended for lightweight visibility transitions such as drawers, floating panels, notifications and contextual UI reveals.',
      features: [
        'animates content from the top, right, bottom or left',
        'performs transform-based visibility motion without affecting layout',
        'coordinates enter and exit transitions using visibility state',
        'works well for overlays, drawers, popovers and transient UI',
      ],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
        description: 'Content animated.',
      },
      duration: {
        options: ['number'],
        defaultValue: String(DEFAULT_SLIDE_DURATION),
        description: 'Animation duration in milliseconds.',
      },
      easing: {
        options: [DOCS_CSS_LABEL],
        defaultValue: DEFAULT_SLIDE_EASING,
        description: 'Timing function for the animation.',
      },
      from: {
        options: SLIDE_FROM,
        isRequired: true,
        description: 'Edge from which the content slides when becoming visible.',
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
        description: 'Sliding in from the left.',
        jsx: (
          <SlideWrapper>
            <Slide visible={false} from="left" duration={1000}>
              <Text>Animated content.</Text>
            </Slide>
          </SlideWrapper>
        ),
        code: `<Slide visible={visible} from="left" duration={1000}>
  <Text>Animated content.</Text>
</Slide>`,
        sandBoxWithNoPadding: true,
      },
      {
        description: 'Sliding in from the right.',
        jsx: (
          <Flex justifyContent="flex-end">
            <Box overflowX="hidden">
              <SlideWrapper>
                <Slide visible={false} from="right" duration={1000}>
                  <Text>Animated content.</Text>
                </Slide>
              </SlideWrapper>
            </Box>
          </Flex>
        ),
        code: `<Slide visible={visible} from="right" duration={1000}>
  <Text>Animated content.</Text>
</Slide>`,
        sandBoxWithNoPadding: true,
      },
      {
        description: 'Sliding in from the top.',
        jsx: (
          <Box overflowX="hidden">
            <SlideWrapper>
              <Slide visible={false} from="top" duration={1000}>
                <Text>Animated content.</Text>
              </Slide>
            </SlideWrapper>
          </Box>
        ),
        code: `<Slide visible={visible} from="top" duration={1000}>
  <Text>
    Animated content.
  </Text>
</Slide>`,
        sandBoxWithNoPadding: true,
      },
    ],
    changelog: {
      '0.2.3': ['released'],
    },
  } satisfies ComponentMeta<SlideProps>,
}
