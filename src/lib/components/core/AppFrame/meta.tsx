import { AppFrame, type AppFrameProps } from 'lib/components'
import { DEFAULT_SWITCH_BREAKPOINT, PROP_GROUPS, SWITCH_BREAKPOINTS } from 'lib/constants'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box/meta'
import { GRID_META } from '../Grid/meta'
import {
  type AppFrameFooterProps,
  type AppFrameHeaderProps,
  type AppFrameMainProps,
  DEFAULT_APP_FRAME_FOOTER_INTENT,
  DEFAULT_APP_FRAME_HEADER_INTENT,
} from './slots'
import { AppFrameFooterSectionProps } from './slots/AppFrameFooterSection/definitions'

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
      composedOf: ['Grid'],
      topLevelTags: ['div'],
      slots: ['AppFrame.Header', 'AppFrame.Main', 'AppFrame.Footer', 'AppFrame.FooterSection'],
    },
    props: {
      stickyHeader: {
        group: PROP_GROUPS.LAYOUT,
        options: ['boolean'],
        defaultValue: 'false',
        isRequired: false,
        isResponsive: false,
        description: 'Keeps the header fixed at the top of the viewport.',
      },
      children: {
        ...GRID_META.Grid.props.children,
        isRequired: true,
        options: ['AppFrame.Header', 'AppFrame.Main', 'AppFrame.Footer'],
        description: 'AppFrame.Footer is optional, the rest is required.',
      },
      tagRef: GRID_META.Grid.props.tagRef,
      tagAttrs: GRID_META.Grid.props.tagAttrs,
    },
    examples: [
      {
        description: 'Application view composed of header, main area and footer.',
        jsx: (
          <AppFrame>
            <AppFrame.Header>Header</AppFrame.Header>
            <AppFrame.Main>Main</AppFrame.Main>
            <AppFrame.Footer>
              <AppFrame.FooterSection>Footer section 1</AppFrame.FooterSection>
              <AppFrame.FooterSection>Footer section 2</AppFrame.FooterSection>
              <AppFrame.FooterSection>Footer section 3</AppFrame.FooterSection>
            </AppFrame.Footer>
          </AppFrame>
        ),
        sandBoxWithNoPadding: true,
      },
    ],
    changelog: {
      '0.11.0': ['merged `Footer` into `AppFrame`'],
      '0.8.0': ['removed `borderIntent` prop'],
      '0.2.3': ['released'],
    },
  } satisfies ComponentMeta<AppFrameProps>,
  AppFrameHeader: {
    overview: {
      bundle: 'core',
      name: 'AppFrame.Header',
      title: 'Defines the top region of AppFrame.',
      guidelines: ['typically used for navigation, branding or other global actions'],
      composedOf: ['Box'],
      topLevelTags: ['header'],
    },
    props: {
      color: {
        ...BOX_META.Box.props.color,
        isResponsive: false,
      },
      intent: {
        ...BOX_META.Box.props.intent,
        defaultValue: String(DEFAULT_APP_FRAME_HEADER_INTENT),
        isResponsive: false,
      },
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      tagRef: BOX_META.Box.props.tagRef,
      tagAttrs: BOX_META.Box.props.tagAttrs,
    },
  } satisfies ComponentMeta<AppFrameHeaderProps>,
  AppFrameMain: {
    overview: {
      bundle: 'core',
      name: 'AppFrame.Main',
      title: 'Defines the central content region of AppFrame.',
      features: ['holds the primary application content or view'],
      composedOf: ['Box'],
      topLevelTags: ['main'],
    },
    props: {
      padding: BOX_META.Box.props.padding,
      paddingInline: BOX_META.Box.props.paddingInline,
      paddingBlock: BOX_META.Box.props.paddingBlock,
      paddingTop: BOX_META.Box.props.paddingTop,
      paddingRight: BOX_META.Box.props.paddingRight,
      paddingBottom: BOX_META.Box.props.paddingBottom,
      paddingLeft: BOX_META.Box.props.paddingLeft,
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      tagRef: BOX_META.Box.props.tagRef,
      tagAttrs: BOX_META.Box.props.tagAttrs,
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
      topLevelTags: ['footer'],
      slots: ['AppFrame.FooterSection'],
    },
    props: {
      color: {
        ...BOX_META.Box.props.color,
        isResponsive: false,
      },
      intent: {
        ...BOX_META.Box.props.intent,
        defaultValue: String(DEFAULT_APP_FRAME_FOOTER_INTENT),
        isResponsive: false,
      },
      footerStackBreakpoint: {
        group: PROP_GROUPS.LAYOUT,
        options: SWITCH_BREAKPOINTS,
        defaultValue: DEFAULT_SWITCH_BREAKPOINT,
        description:
          'Defines the breakpoint from which the footer switches from a stacked vertical layout to a horizontal layout.',
      },
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
        description:
          'Footer content. Can be AppFrame.FooterSection slots or any regular React content when section grouping is not needed.',
      },
      tagRef: BOX_META.Box.props.tagRef,
      tagAttrs: BOX_META.Box.props.tagAttrs,
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
      topLevelTags: ['section'],
    },
    props: {
      padding: {
        ...BOX_META.Box.props.padding,
      },
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
    },
  } satisfies ComponentMeta<AppFrameFooterSectionProps>,
}
