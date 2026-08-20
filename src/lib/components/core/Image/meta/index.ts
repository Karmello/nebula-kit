import { ImageProps } from 'lib/index.core'
import { ComponentMeta, DOCS_CSS_LABEL } from 'client/definitions'

import { BOX_META } from '../../Box/meta'
import {
  IMAGE_CROSS_ORIGIN,
  IMAGE_DECODING,
  IMAGE_FETCH_PRIORITY,
  IMAGE_LOADING,
  IMAGE_OBJECT_FIT,
  IMAGE_REFERRER_POLICY,
} from '../constants'
import { IMAGE_CHANGELOG } from './changelog'
import { IMAGE_EXAMPLES } from './examples'

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
      exposedTags: ['img'],
    },
    props: {
      src: {
        options: ['string'],
        description: 'Source URL of the image.',
      },
      alt: {
        options: ['string'],
        description: 'Alternative text describing the image for accessibility.',
      },
      title: {
        options: ['string'],
        description: 'Supplementary text associated with the image.',
      },
      loading: {
        options: IMAGE_LOADING,
        description: 'Controls whether the image is loaded eagerly or lazily by the browser.',
      },
      decoding: {
        options: IMAGE_DECODING,
        description: 'Hints how the browser should decode the image.',
      },
      fetchPriority: {
        options: IMAGE_FETCH_PRIORITY,
        description: 'Hints the browser about the relative priority of fetching the image.',
      },
      objectFit: {
        options: IMAGE_OBJECT_FIT,
        isResponsive: true,
        description: 'Defines how the image is resized to fit its container.',
        link: true,
      },
      objectPosition: {
        options: [DOCS_CSS_LABEL],
        isResponsive: true,
        description: 'Sets the alignment of the image within its container.',
        link: true,
      },
      onLoad: {
        options: ['e => void'],
        description: 'Called when the underlying img element fires a load event.',
      },
      onError: {
        options: ['e => void'],
        description: 'Called when the underlying img element fires an error event.',
      },
      crossOrigin: {
        options: IMAGE_CROSS_ORIGIN,
        description: 'Controls the CORS mode used when fetching the image.',
      },
      referrerPolicy: {
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
    examples: IMAGE_EXAMPLES,
    changelog: IMAGE_CHANGELOG,
  } satisfies ComponentMeta<ImageProps>,
}
