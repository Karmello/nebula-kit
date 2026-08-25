import { DEFAULT_APP_FRAME_FOOTER_SECTION_PADDING } from 'lib/components/core/AppFrame/slots/AppFrameFooterSection/constants'
import type { AppFrameFooterSectionProps } from 'lib/components/core/AppFrame/slots/AppFrameFooterSection/types'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'

export const APP_FRAME_FOOTER_SECTION_META = {
  overview: {
    bundle: 'core',
    name: 'AppFrame.FooterSection?',
    title: 'Defines a content group inside AppFrame.Footer.',
    description:
      'AppFrame.FooterSection groups related footer content such as links, legal text or supplementary navigation inside the footer region.',
    features: [
      'groups related footer content into separate sections',
      'participates in the footer layout when sections stack or align horizontally',
      'keeps footer content structure explicit without requiring custom wrappers',
    ],
    composedOf: ['Box'],
    exposedTags: ['section'],
  },
  props: {
    children: {
      ...BOX_META.Box.props.children,
      isRequired: true,
    },
    padding: {
      ...BOX_META.Box.props.padding,
      defaultValue: String(DEFAULT_APP_FRAME_FOOTER_SECTION_PADDING),
    },
    paddingBlock: BOX_META.Box.props.paddingBlock,
    paddingInline: BOX_META.Box.props.paddingInline,
  },
} satisfies ComponentMeta<AppFrameFooterSectionProps>
