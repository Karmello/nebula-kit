import type { AppFrameProps } from 'lib/components/core/AppFrame/types'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'
import { APP_FRAME_CHANGELOG } from './changelog'
import { APP_FRAME_EXAMPLES } from './examples'

export const APP_FRAME_META = {
  overview: {
    bundle: 'core',
    title: 'Application shell for structuring a full page view.',
    description:
      'AppFrame defines the outer structure of an application view by arranging header, main and footer regions into a predictable page shell.',
    features: [
      'provides semantic header, main and footer regions',
      'keeps application-level page structure consistent',
      'supports an optional sticky header',
      'allows the main region to own page content spacing',
      'supports footer sections that can stack or align horizontally across breakpoints',
    ],
    composedOf: ['Box'],
    exposedTags: ['div'],
    slots: ['AppFrame.Header', 'AppFrame.Main', 'AppFrame.Footer', 'AppFrame.FooterSection'],
  },
  props: {
    children: {
      ...BOX_META.props.children,
      isRequired: true,
      options: ['AppFrame.Header', 'AppFrame.Main', 'AppFrame.Footer'],
      description: 'AppFrame.Footer is optional, the rest is required.',
    },
    stickyHeader: {
      options: ['boolean'],
      defaultValue: 'false',
      isRequired: false,
      isResponsive: false,
      description: 'Keeps the header fixed at the top of the viewport.',
    },
    tagAttrs: BOX_META.props.tagAttrs,
    tagRef: BOX_META.props.tagRef,
  },
  examples: APP_FRAME_EXAMPLES,
  changelog: APP_FRAME_CHANGELOG,
} satisfies ComponentMeta<AppFrameProps>
