import { PROP_GROUPS } from 'lib/constants'
import { Image, ImageProps } from 'lib/index.core'
import { ComponentMeta, DOCS_CSS_LABEL } from 'client/definitions'

import { Box } from '../Box'
import { BOX_META } from '../Box/meta'
import {
  IMAGE_CROSS_ORIGIN,
  IMAGE_DECODING,
  IMAGE_FETCH_PRIORITY,
  IMAGE_LOADING,
  IMAGE_OBJECT_FIT,
  IMAGE_REFERRER_POLICY,
} from './constants'

export const IMAGE_META = {
  Image: {
    overview: {
      bundle: 'core',
      title: 'Foundational component for rendering and styling images consistently across the system.',
      features: [
        'renders a native img element',
        'exposes logical sizing and constraints',
        'supports responsive object-fit and object-position',
        'serves as a base for composed image components',
      ],
      composedOf: ['Box'],
      topLevelTags: ['img'],
    },
    props: {
      src: {
        group: PROP_GROUPS.IMAGE_RENDERING,
        options: ['string'],
        description: 'Source URL of the image.',
      },
      alt: {
        group: PROP_GROUPS.IMAGE_RENDERING,
        options: ['string'],
        description: 'Alternative text describing the image for accessibility.',
      },
      title: {
        group: PROP_GROUPS.IMAGE_RENDERING,
        options: ['string'],
        description: 'Supplementary text associated with the image.',
      },
      loading: {
        group: PROP_GROUPS.IMAGE_RENDERING,
        options: IMAGE_LOADING,
        description: 'Controls whether the image is loaded eagerly or lazily by the browser.',
      },
      decoding: {
        group: PROP_GROUPS.IMAGE_RENDERING,
        options: IMAGE_DECODING,
        description: 'Hints how the browser should decode the image.',
      },
      fetchPriority: {
        group: PROP_GROUPS.IMAGE_RENDERING,
        options: IMAGE_FETCH_PRIORITY,
        description: 'Hints the browser about the relative priority of fetching the image.',
      },
      objectFit: {
        group: PROP_GROUPS.IMAGE_RENDERING,
        options: IMAGE_OBJECT_FIT,
        isResponsive: true,
        description: 'Defines how the image is resized to fit its container.',
        link: true,
      },
      objectPosition: {
        group: PROP_GROUPS.IMAGE_RENDERING,
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Sets the alignment of the image within its container.',
        link: true,
      },
      onLoad: {
        group: PROP_GROUPS.IMAGE_RENDERING,
        options: ['e => void'],
        description: 'Called when the underlying img element fires a load event.',
      },
      onError: {
        group: PROP_GROUPS.IMAGE_RENDERING,
        options: ['e => void'],
        description: 'Called when the underlying img element fires an error event.',
      },
      crossOrigin: {
        group: PROP_GROUPS.IMAGE_RENDERING,
        options: IMAGE_CROSS_ORIGIN,
        description: 'Controls the CORS mode used when fetching the image.',
      },
      referrerPolicy: {
        group: PROP_GROUPS.IMAGE_RENDERING,
        options: IMAGE_REFERRER_POLICY,
        description: 'Controls which referrer information is sent when fetching the image.',
      },
      pointerEvents: BOX_META.Box.props.pointerEvents,
      opacity: BOX_META.Box.props.opacity,
      aspectRatio: BOX_META.Box.props.aspectRatio,
      display: BOX_META.Box.props.display,
      overflow: BOX_META.Box.props.overflow,
      overflowX: BOX_META.Box.props.overflowX,
      overflowY: BOX_META.Box.props.overflowY,
      blockSize: BOX_META.Box.props.blockSize,
      minBlockSize: BOX_META.Box.props.minBlockSize,
      maxBlockSize: BOX_META.Box.props.maxBlockSize,
      inlineSize: BOX_META.Box.props.inlineSize,
      minInlineSize: BOX_META.Box.props.minInlineSize,
      maxInlineSize: BOX_META.Box.props.maxInlineSize,
      borderRadius: BOX_META.Box.props.borderRadius,
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
    examples: [
      {
        jsx: <Image />,
        skip: true,
      },
      {
        description: 'Basic image rendering with a defined size.',
        jsx: (
          <Box textAlign="center">
            <Image src="/imgs/town.webp" display="inline-block" inlineSize="300px" />
          </Box>
        ),
      },
      {
        description: 'Rounded image.',
        jsx: (
          <Box textAlign="center">
            <Image src="/imgs/town.webp" display="inline-block" inlineSize="300px" borderRadius="50%" overflow="hidden" />
          </Box>
        ),
      },
      {
        description: 'Image constrained by a fixed aspect ratio.',
        jsx: (
          <Box textAlign="center">
            <Image
              src="/imgs/town.webp"
              display="inline-block"
              inlineSize="300px"
              aspectRatio="16 / 9"
              objectFit="cover"
              overflow="hidden"
            />
          </Box>
        ),
      },
    ],
    changelog: {
      '0.4.0': ['released'],
    },
  } satisfies ComponentMeta<ImageProps>,
}
