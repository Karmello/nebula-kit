import { DEFAULT_SWITCH_BREAKPOINT, SWITCH_BREAKPOINTS } from 'lib/constants'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../../Box/meta'
import {
  type AppFrameFooterProps,
  type AppFrameFooterSectionProps,
  type AppFrameHeaderProps,
  type AppFrameMainProps,
} from '../slots'
import {
  DEFAULT_APP_FRAME_FOOTER_INTENT,
  DEFAULT_APP_FRAME_FOOTER_SECTION_PADDING,
  DEFAULT_APP_FRAME_HEADER_INTENT,
} from '../slots'
import type { AppFrameProps } from '../types'
import { APP_FRAME_CHANGELOG } from './changelog'
import { APP_FRAME_EXAMPLES } from './examples'

export const APP_FRAME_META = {
  AppFrame: {
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
        ...BOX_META.Box.props.children,
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
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
    examples: APP_FRAME_EXAMPLES,
    changelog: APP_FRAME_CHANGELOG,
  } satisfies ComponentMeta<AppFrameProps>,
  AppFrameHeader: {
    overview: {
      bundle: 'core',
      name: 'AppFrame.Header',
      title: 'Defines the top region of AppFrame.',
      guidelines: ['typically used for navigation, branding or other global actions'],
      composedOf: ['Box'],
      exposedTags: ['header'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      color: {
        ...BOX_META.Box.props.color,
        isResponsive: false,
      },
      intent: {
        ...BOX_META.Box.props.intent,
        defaultValue: String(DEFAULT_APP_FRAME_HEADER_INTENT),
        isResponsive: false,
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
  } satisfies ComponentMeta<AppFrameHeaderProps>,
  AppFrameMain: {
    overview: {
      bundle: 'core',
      name: 'AppFrame.Main',
      title: 'Defines the central content region of AppFrame.',
      features: ['holds the primary application content or view'],
      composedOf: ['Box'],
      exposedTags: ['main'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      padding: BOX_META.Box.props.padding,
      paddingBlock: BOX_META.Box.props.paddingBlock,
      paddingBottom: BOX_META.Box.props.paddingBottom,
      paddingInline: BOX_META.Box.props.paddingInline,
      paddingLeft: BOX_META.Box.props.paddingLeft,
      paddingRight: BOX_META.Box.props.paddingRight,
      paddingTop: BOX_META.Box.props.paddingTop,
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
  } satisfies ComponentMeta<AppFrameMainProps>,
  AppFrameFooter: {
    overview: {
      bundle: 'core',
      name: 'AppFrame.Footer?',
      title: 'Defines the bottom region of AppFrame.',
      guidelines: [
        'commonly used for legal notices, links or supplementary information',
        'AppFrame.FooterSection slot is optional, when no footer sections are provided, AppFrame.Footer renders its children directly',
      ],
      composedOf: ['Box'],
      exposedTags: ['footer'],
      slots: ['AppFrame.FooterSection'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
        description:
          'Footer content. Can be AppFrame.FooterSection slots or any regular React content when section grouping is not needed.',
      },
      color: {
        ...BOX_META.Box.props.color,
        isResponsive: false,
      },
      footerStackBreakpoint: {
        options: SWITCH_BREAKPOINTS,
        defaultValue: DEFAULT_SWITCH_BREAKPOINT,
        description:
          'Defines the breakpoint from which the footer switches from a stacked vertical layout to a horizontal layout.',
      },
      intent: {
        ...BOX_META.Box.props.intent,
        defaultValue: String(DEFAULT_APP_FRAME_FOOTER_INTENT),
        isResponsive: false,
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
  } satisfies ComponentMeta<AppFrameFooterProps>,
  AppFrameFooterSection: {
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
  } satisfies ComponentMeta<AppFrameFooterSectionProps>,
}
