import { useEffect, useState } from 'react'

import { BOX_META } from 'lib/components/core/Box/meta'
import { Box } from 'lib/index.core'
import { Fade, FadeProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { DEFAULT_FADE_DURATION, DEFAULT_FADE_EASING } from './fade'

const FadeWrapper = ({ children }: Partial<FadeProps>) => {
  const [visible, setVisible] = useState<boolean>(false)
  let interval: NodeJS.Timeout | null = null

  useEffect(() => {
    setVisible(visible => !visible)

    interval = setInterval(() => {
      setVisible(visible => !visible)
    }, 2000)

    return () => {
      clearInterval(interval)
      interval = null
    }
  }, [])

  return (
    <Fade visible={visible} duration={1000}>
      {children}
    </Fade>
  )
}

export const FADE_META = {
  Fade: {
    overview: {
      bundle: 'pro',
      title: 'Motion component for animating opacity transitions.',
      description:
        'Fade applies opacity-based motion that smoothly transitions content between visible and hidden states. It is intended for lightweight visual transitions such as overlays, tooltips, floating UI and subtle content reveals.',
      features: [
        'animates visibility using opacity transitions',
        'performs visual-only motion without affecting layout',
        'coordinates enter and exit visibility states',
        'works well for overlays, tooltips, popovers and transient UI',
      ],
      composedOf: ['Box'],
      topLevelTags: ['span'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      duration: {
        options: ['number'],
        defaultValue: String(DEFAULT_FADE_DURATION),
        description: 'Controls the fade transition duration in milliseconds.',
      },
      easing: {
        options: ['string'],
        defaultValue: DEFAULT_FADE_EASING,
        description: 'CSS timing function used for the fade transition animation.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      visible: {
        options: ['boolean'],
        isRequired: true,
        description: 'Controls whether the content is shown or hidden through the fade transition.',
      },
    },
    examples: [
      {
        description: 'Fade transition controlled by `visible` prop.',
        jsx: (
          <FadeWrapper>
            <Box drawable variant="outline" intent="primary" padding="20px">
              Fade content
            </Box>
          </FadeWrapper>
        ),
        code: `<Fade visible={visible}>
  <Box drawable variant="outline" intent="primary" padding="20px">
    Fade content
  </Box>
</Fade>`,
      },
    ],
    changelog: {
      '0.11.0': ['released'],
    },
  } satisfies ComponentMeta<FadeProps>,
}
